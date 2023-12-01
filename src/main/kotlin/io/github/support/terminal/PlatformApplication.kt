package io.github.support.terminal

import io.github.support.terminal.application.ApplicationContextConfiguration
import org.beryx.textio.TextIO
import org.beryx.textio.TextIoFactory
import org.beryx.textio.TextTerminal
import org.dizitart.no2.Nitrite
import org.springframework.boot.SpringApplication
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder
import java.io.*
import java.util.*

private val DEFAULT_CONFIGURATION_FILE_PATH = System.getProperty("user.home") + File.separator + ".support-terminal"
private val DEFAULT_DATA_STORE = DEFAULT_CONFIGURATION_FILE_PATH + File.separator + "data"
private val DB_FILE = File.separator + "database.db"

object PlatformApplication {

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
        createConfigFile(
            null, storagePath, AdminCredentials("admin", "admin-secret")
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
        terminal.println("First RUN. Required initial configuration:")
        val storagePath = getStoragePath(textIO, terminal)
        checkDataBasePath(storagePath)
        terminal.println("Successful connection")
        val admin = getAdminUser(textIO, terminal)
        createConfigFile(terminal, storagePath, admin)
        terminal.println("First RUN completed. You need to restart the app")
    }

    private fun getStoragePath(textIO: TextIO, terminal: TextTerminal<*>): String {
        var storagePath = textIO.newStringInputReader().withInputTrimming(true).withDefaultValue(DEFAULT_DATA_STORE)
            .read("Data store path ($DEFAULT_DATA_STORE): ")
        createPathWithParents(storagePath)
        storagePath = storagePath + DB_FILE
        try {
            checkDataBasePath(storagePath)
        } catch (t: Throwable) {
            terminal.println("Problem to create data store")
            terminal.println("Check the path and required permissions")
            return getStoragePath(textIO, terminal)
        }
        return storagePath
    }

    private fun getAdminUser(textIO: TextIO, terminal: TextTerminal<*>): AdminCredentials {
        terminal.println("Administrator profile:")
        val username =
            textIO.newStringInputReader().withInputTrimming(true).withDefaultValue("admin").read("Login ? (admin): ")
        val password = textIO.newStringInputReader().withInputTrimming(true).withInputMasking(true).withMinLength(6)
            .read("Password (at least 6 characters): ")
        textIO.newStringInputReader().withInputTrimming(true).withInputMasking(true)
            .withParseErrorMessagesProvider { pas2: String, item: String? ->
                if (password != pas2) {
                    return@withParseErrorMessagesProvider Arrays.asList("Password has to be the same")
                }
                null
            }.read("Repeat the password: ")
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

    private fun createConfigFile(
        terminal: TextTerminal<*>?, storagePath: String, admin: AdminCredentials
    ) {
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
            terminal?.println("Could not create configuration file $DEFAULT_CONFIGURATION_FILE_PATH")
        } finally {
            if (output != null) {
                try {
                    output.close()
                } catch (e: IOException) {
                    terminal?.println("Error during creating configuration file  $DEFAULT_CONFIGURATION_FILE_PATH")
                }
            }
        }
    }

    private fun checkDataBasePath(storagePath: String) {
        val db = Nitrite.builder().compressed().filePath(storagePath).openOrCreate()
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
