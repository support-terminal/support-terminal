package io.github.bot.terminal

import io.github.bot.terminal.application.ApplicationContextConfiguration
import org.beryx.textio.TextIO
import org.beryx.textio.TextIoFactory
import org.beryx.textio.TextTerminal
import org.dizitart.no2.Nitrite
import org.springframework.boot.SpringApplication
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.io.*
import java.util.*

object PlatformApplication {
    private val DEFAULT_CONFIGURATION_FILE_PATH = System.getProperty("user.home") + File.separator + ".support-terminal"
    private val DEFAULT_DATA_STORE = DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "data"
    private val DB_FILE = File.separator + "database.db"

    @Throws(IOException::class)
    @JvmStatic
    fun main(args: Array<String>) {
        if (iDefaultStart(args) && !checkConfigurationFile()) {
            defaultStart(args)
        } else if (checkConfigurationFile()) {
            runSpringApplicationContext(args)
        } else {
            firstStartInit()
        }
    }

    private fun defaultStart(args: Array<String>) {
        createPathWithParents(DEFAULT_DATA_STORE)
        val storagePath = DEFAULT_DATA_STORE + DB_FILE
        checkDataBasePath(storagePath)
        createConfigFile(null, storagePath,
                AdminCredentials("admin", "admin-secret")
        )
        SpringApplication.run(ApplicationContextConfiguration::class.java, *args)
    }

    private fun iDefaultStart(args: Array<String>?): Boolean {
        return args != null && args.size > 0 && args[0] == "default"
    }

    @Throws(IOException::class)
    private fun resetAdminPassword(newCredentials: AdminCredentials) {
        val confiFilePath = DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties"
        val prop = Properties()
        prop.load(FileInputStream(confiFilePath))
        prop.setProperty("admin-login", newCredentials.login)
        prop.setProperty("admin-password", newCredentials.login)
        prop.store(FileOutputStream(confiFilePath), null)
        println("Password was changed successful")
        System.exit(0)
    }

    private fun firstStartInit() {
        val textIO = TextIoFactory.getTextIO()
        val terminal = textIO.textTerminal
        terminal.println("Первый запуск. Необходима предварительная настройка.")
        val storagePath = getStoragePath(textIO, terminal)
        checkDataBasePath(storagePath)
        terminal.println("Соединение установлено.")
        val admin = getAdminUser(textIO, terminal)
        createConfigFile(terminal, storagePath, admin)
        terminal.println("Настройка первого запуска завершена. Пожалуйста перезапустите приложение")
    }

    private fun getStoragePath(textIO: TextIO, terminal: TextTerminal<*>): String {
        var storagePath = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue(DEFAULT_DATA_STORE)
                .read("Укажите путь для хранения данных ($DEFAULT_DATA_STORE): ")
        createPathWithParents(storagePath)
        storagePath = storagePath + DB_FILE
        try {
            checkDataBasePath(storagePath)
        } catch (t: Throwable) {
            terminal.println("Не удалось создать базу данных!")
            terminal.println("Проверьте путь для хранения данных, и попробуйте снова (возможно не хватает прав на использование директории)")
            return getStoragePath(textIO, terminal)
        }
        return storagePath
    }

    private fun getAdminUser(textIO: TextIO, terminal: TextTerminal<*>): AdminCredentials {
        terminal.println("Необходимо настроить учетную запись для администратора.")
        val username = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withDefaultValue("admin")
                .read("Придумайте и укажите логин (admin): ")
        val password = textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withMinLength(6)
                .read("Придумайте пароль (минимум 6 символов): ")
        textIO.newStringInputReader()
                .withInputTrimming(true)
                .withInputMasking(true)
                .withParseErrorMessagesProvider { pas2: String, item: String? ->
                    if (password != pas2) {
                        return@withParseErrorMessagesProvider Arrays.asList("Пароли не совпадают")
                    }
                    null
                }
                .read("Повторите пароль: ")
        return AdminCredentials(username, password)
    }

    private fun checkConfigurationFile(): Boolean {
        val f = File(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties")
        return f.exists() && !f.isDirectory
    }

    @Throws(IOException::class)
    private fun runSpringApplicationContext(args: Array<String>) {
        SpringApplication.run(ApplicationContextConfiguration::class.java, *args)
        /**
         * Нужно запустить jar с 3 параметрами:
         * java -jar platform-0.3.0-SNAPSHOT.jar ap <login> <new password>
         * ap - команда на смену пароля
        </new></login> */
        if (args != null && args.size > 0 && args[0] == "ap") {
            println("Change admin password command: " + Arrays.toString(args))
            resetAdminPassword(AdminCredentials(args[1], args[2]))
        }
    }

    private fun createConfigFile(terminal: TextTerminal<*>?, storagePath: String,
                                 admin: AdminCredentials) {
        val prop = Properties()
        var output: OutputStream? = null
        try {
            createPathWithParents(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "libs")
            output = FileOutputStream(DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "config.properties")
            // set the properties value
            prop.setProperty("storage_path", storagePath)
            prop.setProperty("admin-login", admin.login)
            prop.setProperty("admin-password", admin.password)
            prop.store(output, null)
            val p = PrintWriter(output)
            p.println("# Для настройки proxy заполните соответсвующие  параметры")
            p.println("# Если proxy  без аутентификации пользователя и пароль можно не указывать")
            p.println("proxy_host=")
            p.println("proxy_port=")
            p.println("proxy_username=")
            p.println("proxy_password=")
            p.flush()
        } catch (io: IOException) {
            terminal?.println("Не смогли создать конфигурационный файл $DEFAULT_CONFIGURATION_FILE_PATH")
        } finally {
            if (output != null) {
                try {
                    output.close()
                } catch (e: IOException) {
                    terminal?.println("Ошибка сохранения конфигурационного файла $DEFAULT_CONFIGURATION_FILE_PATH")
                }
            }
        }
    }

    private fun checkDataBasePath(storagePath: String) {
        val db = Nitrite.builder()
                .compressed()
                .filePath(storagePath)
                .openOrCreate()
        db.close()
    }

    private fun createPathWithParents(path: String): File {
        val file = File(path)
        file.parentFile.mkdirs()
        file.mkdir()
        return file
    }

    internal class AdminCredentials(var login: String, password: String?) {
        var password: String

        init {
            this.password = BCryptPasswordEncoder().encode(password)
        }
    }
}