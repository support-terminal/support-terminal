package io.github.bot.terminal;


import io.github.bot.terminal.application.ApplicationContextConfiguration;
import org.beryx.textio.TextIO;
import org.beryx.textio.TextIoFactory;
import org.beryx.textio.TextTerminal;
import org.dizitart.no2.Nitrite;
import org.springframework.boot.SpringApplication;
import org.springframework.context.ConfigurableApplicationContext;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;

import java.io.*;
import java.util.Arrays;
import java.util.Properties;

public class PlatformApplication {

    private static String DEFAULT_CONFIGURATION_FILE_PATH =
            System.getProperty("user.home") + File.separator + ".support-terminal";

    private static String DEFAULT_DATA_STORE = DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "data";

    private static String DB_FILE = File.separator + "database.db";

    public static void main(String[] args) throws IOException {
        if (iDefaultStart(args) && !checkConfigurationFile()) {
            defaultStart(args);
        } else if (checkConfigurationFile()) {
            runSpringApplicationContext(args);
        } else {
            firstStartInit();
        }
    }

    private static void defaultStart(String[] args) {
        createPathWithParents(DEFAULT_DATA_STORE);
        String storagePath = DEFAULT_DATA_STORE + DB_FILE;
        checkDataBasePath(storagePath);
        createConfigFile(null, storagePath,
                new AdminCredentials("admin", "admin-secret")
        );
        SpringApplication.run(ApplicationContextConfiguration.class, args);
    }

    private static boolean iDefaultStart(String[] args) {
        return args != null && args.length > 0 && args[0].equals("default");
    }

    private static void resetAdminPassword(AdminCredentials newCredentials) throws IOException {

        String confiFilePath = DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties";

        Properties prop = new Properties();
        prop.load(new FileInputStream(confiFilePath));
        prop.setProperty("admin-login", newCredentials.login);
        prop.setProperty("admin-password", newCredentials.login);
        prop.store(new FileOutputStream(confiFilePath), null);

        System.out.println("Password was changed successful");
        System.exit(0);
    }

    private static void firstStartInit() {

        TextIO textIO = TextIoFactory.getTextIO();
        TextTerminal terminal = textIO.getTextTerminal();
        terminal.println("Первый запуск. Необходима предварительная настройка.");

        String storagePath = getStoragePath(textIO, terminal);

        checkDataBasePath(storagePath);
        terminal.println("Соединение установлено.");

        AdminCredentials admin = getAdminUser(textIO, terminal);

        createConfigFile(terminal, storagePath, admin);

        terminal.println("Настройка первого запуска завершена. Пожалуйста перезапустите приложение");
    }

    private static String getStoragePath(TextIO textIO, TextTerminal terminal) {
        String storagePath = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue(DEFAULT_DATA_STORE)
                .read("Укажите путь для хранения данных (" + DEFAULT_DATA_STORE + "): ");

        createPathWithParents(storagePath);

        storagePath = storagePath + DB_FILE;
        try {
            checkDataBasePath(storagePath);
        } catch (Throwable t) {
            terminal.println("Не удалось создать базу данных!");
            terminal.println("Проверьте путь для хранения данных, и попробуйте снова (возможно не хватает прав на использование директории)");
            return getStoragePath(textIO, terminal);
        }

        return storagePath;
    }


    private static AdminCredentials getAdminUser(TextIO textIO, TextTerminal terminal) {
        terminal.println("Необходимо настроить учетную запись для администратора.");

        String username = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue("admin")
                .read("Придумайте и укажите логин (admin): ");

        String password = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withMinLength(6)
                .read("Придумайте пароль (минимум 6 символов): ");

        textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withParseErrorMessagesProvider((pas2, item) -> {
                    if (!password.equals(pas2)) {
                        return Arrays.asList("Пароли не совпадают");
                    }
                    return null;
                })
                .read("Повторите пароль: ");

        return new AdminCredentials(username, password);

    }

    private static boolean checkConfigurationFile() {
        File f = new File(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties");
        return f.exists() && !f.isDirectory();
    }


    private static void runSpringApplicationContext(String[] args) throws IOException {
        ConfigurableApplicationContext context = SpringApplication.run(ApplicationContextConfiguration.class, args);
        /**
         * Нужно запустить jar с 3 параметрами:
         * java -jar platform-0.3.0-SNAPSHOT.jar ap <login> <new password>
         * ap - команда на смену пароля
         */
        if (args != null && args.length > 0 && args[0].equals("ap")) {
            System.out.println("Change admin password command: " + Arrays.toString(args));
            resetAdminPassword(new AdminCredentials(args[1], args[2]));
        }
    }


    private static void createConfigFile(TextTerminal terminal, String storagePath,
                                         AdminCredentials admin) {

        Properties prop = new Properties();
        OutputStream output = null;
        try {

            createPathWithParents(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "libs");
            output = new FileOutputStream(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties");
            // set the properties value
            prop.setProperty("storage_path", storagePath);

            prop.setProperty("admin-login", admin.login);
            prop.setProperty("admin-password", admin.password);

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
            if (terminal != null)
                terminal.println("Не смогли создать конфигурационный файл " + DEFAULT_CONFIGURATION_FILE_PATH);
        } finally {
            if (output != null) {
                try {
                    output.close();
                } catch (IOException e) {
                    if (terminal != null)
                        terminal.println("Ошибка сохранения конфигурационного файла " + DEFAULT_CONFIGURATION_FILE_PATH);
                }
            }

        }

    }

    private static void checkDataBasePath(String storagePath) {
        Nitrite db = Nitrite.builder()
                .compressed()
                .filePath(storagePath)
                .openOrCreate();
        db.close();
    }

    private static File createPathWithParents(String path) {
        File file = new File(path);
        file.getParentFile().mkdirs();
        file.mkdir();
        return file;
    }


    static class AdminCredentials {
        String login;
        String password;

        AdminCredentials(String login, String password) {
            this.login = login;
            this.password = new BCryptPasswordEncoder().encode(password);
        }
    }

}
