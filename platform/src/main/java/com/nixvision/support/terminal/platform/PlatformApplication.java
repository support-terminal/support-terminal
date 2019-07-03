package com.nixvision.support.terminal.platform;


import com.nixvision.support.terminal.platform.app.ApplicationContextConfiguration;
import com.nixvision.support.terminal.platform.app.domains.core.user.entities.CustomerUser;
import com.nixvision.support.terminal.platform.app.domains.core.user.repository.UserRepository;
import com.nixvision.support.terminal.platform.app.domains.core.user.values.UserStates;
import com.nixvision.support.terminal.platform.app.domains.core.user.values.UsersGrantedAuthorities;
import org.beryx.textio.TextIO;
import org.beryx.textio.TextIoFactory;
import org.beryx.textio.TextTerminal;
import org.dizitart.no2.Nitrite;

import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;

import java.io.*;
import java.util.*;

public class PlatformApplication {

    private static String DEFAULT_CONFIGURATION_FILE_PATH =
            System.getProperty("user.home") + File.separator + ".support-terminal";

    private static String DEFAULT_DATA_STORE = DEFAULT_CONFIGURATION_FILE_PATH+File.separator+"data";

    private static String DB_FILE = File.separator+"database.db";

    public static void main(String[] args) {
        if(iDefaultStart(args) && !checkConfigurationFile()){
           defaultStart(args);
        }else if (checkConfigurationFile()) {
            runSpringApplicationContext(args);
        }else {
            firstStartInit();
        }
    }

    private static void defaultStart(String[] args) {
        createPathWithParents(DEFAULT_DATA_STORE);
        String storagePath = DEFAULT_DATA_STORE+DB_FILE;
        Nitrite db = Nitrite.builder()
                .compressed()
                .filePath(storagePath)
                .openOrCreate();

        ObjectRepository<CustomerUser> userObjectRepository = db.getRepository(CustomerUser.class);
        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();
        CustomerUser adminUser =  new CustomerUser()
                .setPassword(passwordEncoder.encode("admin-secret"))
                .setId(UUID.randomUUID().toString())
                .setAuthorities(Arrays.asList(UsersGrantedAuthorities.ADMIN))
                .setState(UserStates.ACTIVE)
                .setRegistrationDate(new Date())
                .setUsername("admin");
        userObjectRepository.insert(adminUser);
        db.commit();
        db.close();

        createConfigFile(null, storagePath);

        SpringApplication.run(ApplicationContextConfiguration.class, args);
    }

    private static boolean iDefaultStart(String[] args) {
        return args!=null && args.length >0 && args[0].equals("default");
    }

    private static void resetAdminPassword(ConfigurableApplicationContext context, String newLogin, String newPassword) {

        UserRepository userRepository = (UserRepository)context.getBean("userRepository");
        List<CustomerUser> all = userRepository.findAll();
        CustomerUser admin = all.stream()
                .filter(u -> u.getAuthorities().contains(UsersGrantedAuthorities.ADMIN))
                .filter(u -> u.getState().equals(UserStates.ACTIVE))
                .findAny().orElseThrow(() -> new RuntimeException("User not found"));

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        admin.setUsername(newLogin);
        admin.setPassword(passwordEncoder.encode(newPassword));

        userRepository.update(admin);

        System.out.println("Password was changed successful");
        System.exit(0);
    }

    private static void firstStartInit() {

        TextIO textIO = TextIoFactory.getTextIO();
        TextTerminal terminal = textIO.getTextTerminal();
        terminal.println("Первый запуск. Необходима предварительная настройка.");

        String storagePath = getStoragePath(textIO, terminal);

        Nitrite db = Nitrite.builder()
                .compressed()
                .filePath(storagePath)
                .openOrCreate();

        terminal.println("Соединение установлено.");

        ObjectRepository<CustomerUser> userObjectRepository = db.getRepository(CustomerUser.class);

        CustomerUser adminUser = getAdminUser(textIO, terminal);
        userObjectRepository.insert(adminUser);

        db.commit();
        db.close();

        createConfigFile(terminal, storagePath);

        terminal.println("Настройка первого запуска завершена. Пожалуйста перезапустите приложение");
    }

    private static String getStoragePath(TextIO textIO, TextTerminal terminal) {
        String storagePath =  textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue(DEFAULT_DATA_STORE)
                .read("Укажите путь для хранения данных ("+DEFAULT_DATA_STORE+"): ");

        createPathWithParents(storagePath);

        storagePath = storagePath+DB_FILE;
        try{
            Nitrite db = Nitrite.builder()
                    .compressed()
                    .filePath(storagePath)
                    .openOrCreate();
            db.close();
        }catch (Throwable t){
            terminal.println("Не удалось создать базу данных!");
            terminal.println("Проверьте путь для хранения данных, и попробуйте снова (возможно не хватает прав на использование директории)");
            return getStoragePath(textIO, terminal);
        }

        return storagePath;
    }


    private static CustomerUser getAdminUser(TextIO textIO, TextTerminal terminal) {
        terminal.println("Необходимо настроить учетную запись для администратора.");

        String username =  textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue("admin")
                .read("Придумайте и укажите логин (admin): ");

        String password =  textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withMinLength(6)
                .read("Придумайте пароль (минимум 6 символов): ");

        textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withParseErrorMessagesProvider((pas2, item) ->{
                    if(!password.equals(pas2)){
                        return Arrays.asList("Пароли не совпадают");
                    }
                    return null;
                })
                .read("Повторите пароль: ");

        PasswordEncoder passwordEncoder = new BCryptPasswordEncoder();

        return new CustomerUser().setPassword(passwordEncoder.encode(password))
                .setId(UUID.randomUUID().toString())
                .setAuthorities(Arrays.asList(UsersGrantedAuthorities.ADMIN))
                .setState(UserStates.ACTIVE)
                .setRegistrationDate(new Date())
                .setUsername(username);

    }

     private static boolean checkConfigurationFile() {
        File f = new File(DEFAULT_CONFIGURATION_FILE_PATH+File.separator+"config.properties");
        return f.exists() && !f.isDirectory();
    }


    private static void runSpringApplicationContext(String[] args) {
        ConfigurableApplicationContext context = SpringApplication.run(ApplicationContextConfiguration.class, args);
        /**
         * Нужно запустить jar с 3 параметрами:
         * java -jar platform-0.3.0-SNAPSHOT.jar ap <login> <new password>
         * ap - команда на смену пароля
         *
         */
        if(args!=null && args.length >0 && args[0].equals("ap")){
            System.out.println("Change admin password command: "+ Arrays.toString(args));
            resetAdminPassword(context, args[1], args[2]);
        }
    }


    private static void createConfigFile(TextTerminal terminal, String storagePath) {

        Properties prop = new Properties();
        OutputStream output = null;
        try {

            createPathWithParents(DEFAULT_CONFIGURATION_FILE_PATH+File.separator + "libs");
            output = new FileOutputStream(DEFAULT_CONFIGURATION_FILE_PATH+File.separator+"config.properties");

            // set the properties value
            prop.setProperty("storage_path", storagePath);
            prop.store(output, null);

            PrintWriter p = new PrintWriter(output);
            p.println("# Для настройки proxy заполните соответсвующие  параметры");
            p.println("# Если proxy  без аутентификации пользователя и пароль можно не указывать");
            p.println("proxy_host=");
            p.println("proxy_port=");
            p.println("proxy_username=");
            p.println("proxy_password=");
            p.flush();

        } catch (IOException io) {
            if(terminal!=null)
                terminal.println("Не смогли создать конфигурационный файл "+DEFAULT_CONFIGURATION_FILE_PATH);
        } finally {
            if (output != null) {
                try {
                    output.close();
                } catch (IOException e) {
                    if(terminal!=null)
                    terminal.println("Ошибка сохранения конфигурационного файла "+DEFAULT_CONFIGURATION_FILE_PATH);
                }
            }

        }

    }

    private static File createPathWithParents(String path) {
        File file = new File(path);
        file.getParentFile().mkdirs();
        file.mkdir();
        return file;
    }


}
