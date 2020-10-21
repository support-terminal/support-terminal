package io.github.bot.terminal.application.domains.updater.services

import io.github.bot.terminal.application.domains.updater.models.ReleaseInfo
import org.apache.tomcat.util.http.fileupload.FileUtils
import org.slf4j.LoggerFactory
import org.springframework.boot.system.ApplicationHome
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.MediaType
import org.springframework.jmx.export.annotation.ManagedOperation
import org.springframework.jmx.export.annotation.ManagedResource
import org.springframework.stereotype.Service
import org.springframework.web.client.RestTemplate
import java.io.File
import java.io.IOException
import java.nio.file.Files
import java.nio.file.Path
import java.nio.file.Paths
import java.util.*

@Service
@ManagedResource
class UpdaterService(
        private val restTemplate: RestTemplate,
        private val restTemplateForFiles: RestTemplate
) {


    @ManagedOperation
    fun runAutoUpdate() {
        log.info("Started application auto-update")
       // eventsService.notifyInfo("Started application auto-update")
        createPathWithParentsOrClear(UPDATE_FILE_PATH)
        val actualAppVersionInfo = restTemplate.exchange(ACTUAL_APP_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo::class.java).body
        val actualUpdaterAppVersionInfo = restTemplate.exchange(ACTUAL_UPDATER_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo::class.java).body
        log.info("Start download update files")
        //eventsService.notifyInfo("Start download update files")

        //Скачиваем файлы в папку обнолений
        val appFilePath = fetchFile(actualAppVersionInfo.assets[0].browserDownloadUrl,
                UPDATE_FILE_PATH + actualAppVersionInfo.assets[0].name)
                .toAbsolutePath().toString()
        val updateFilePath = fetchFile(actualUpdaterAppVersionInfo.assets[0].browserDownloadUrl,
                UPDATE_FILE_PATH + actualUpdaterAppVersionInfo.assets[0].name)
                .toAbsolutePath().toString()
       // eventsService.notifyInfo("Download update files completed")
        val home = ApplicationHome()
        val currentApplicationPath = home.dir.toPath().toAbsolutePath().toString()
        val currentJarPath = Optional.ofNullable(home.source).map { s: File -> s.toPath().toAbsolutePath().toString() }.orElse("Не найден JAR")
        val commanBuilder = StringBuilder()
        commanBuilder.append("java -jar").append(" ") //запускаем апдейтер
                .append(updateFilePath).append(" ") //передаем новый файл
                .append(appFilePath).append(" ") //передаем текущую директорию
                .append(currentApplicationPath).append(" ") //передаем текущий jar
                .append(currentJarPath)
        log.info("Start updater $commanBuilder")
        //eventsService.notifyInfo("The application is going to shutdown. Refresh browser page after 5 minutes")
        val proc = Runtime.getRuntime().exec(commanBuilder.toString())
        if (proc.isAlive) {
            System.exit(0)
        }
    }

    @Throws(IOException::class)
    private fun fetchFile(fileUrl: String, filePathWithName: String): Path {
        val headers = HttpHeaders()
        headers.accept = Arrays.asList(MediaType.APPLICATION_OCTET_STREAM)
        val entity = HttpEntity<String>(headers)
        val response = restTemplateForFiles.exchange(fileUrl, HttpMethod.GET, entity, ByteArray::class.java)
        return Files.write(Paths.get(filePathWithName), response.body)
    }

    companion object {
        val log = LoggerFactory.getLogger(UpdaterService.javaClass)
        private val UPDATE_FILE_PATH = System.getProperty("user.home") + File.separator + ".support-terminal" + File.separator + "update" + File.separator
        private const val ACTUAL_APP_VERSION_URL = "https://api.github.com/repos/support-terminal/support-terminal/releases/latest"
        private const val ACTUAL_UPDATER_VERSION_URL = "https://api.github.com/repos/support-terminal/updater/releases/latest"

        @Throws(IOException::class)
        private fun createPathWithParentsOrClear(path: String): File {
            val file = File(path)
            file.parentFile.mkdirs()
            file.mkdir()
            FileUtils.cleanDirectory(file)
            return file
        }
    }
}