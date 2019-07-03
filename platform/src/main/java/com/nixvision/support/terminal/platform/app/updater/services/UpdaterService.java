package com.nixvision.support.terminal.platform.app.updater.services;


import com.nixvision.support.terminal.platform.app.domains.core.events.services.ApplicationEventsService;
import com.nixvision.support.terminal.platform.app.updater.models.ActualVersionInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.commons.codec.digest.DigestUtils;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.FileInputStream;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

import static java.util.Optional.ofNullable;

@Slf4j
@Service
@RequiredArgsConstructor
public class UpdaterService {

   private final ApplicationEventsService applicationEventsService;

   private static String UPDATE_FILE_PATH =
            System.getProperty("user.home") + File.separator + ".support-terminal" + File.separator +"update"+ File.separator;

   private final RestTemplate restTemplate;
   private final RestTemplate restTemplateForFiles;
   private static final String ACTUAL_APP_VERSION_URL = "https://nixvision.com/artifacts/support-terminal/index.php/actual-version";
   private static final String ACTUAL_UPDATER_VERSION_URL = "https://nixvision.com/artifacts/updater/index.php/actual-version";


    //Updater.jar

    /**
     * Запуск автообновления системы
     */
    public void runAutoUpdate() throws Exception {

        log.info("Start application autoupdate");
        applicationEventsService.notifyUi("Запущен процесс обноления системы");

        createPathWithParentsOrClear(UPDATE_FILE_PATH);


        //Получаем информацию о последних версиях
        ActualVersionInfo actualAppVersionInfo = restTemplate.exchange( ACTUAL_APP_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ActualVersionInfo.class).getBody();
        ActualVersionInfo actualUpdaterAppVersionInfo = restTemplate.exchange( ACTUAL_UPDATER_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ActualVersionInfo.class).getBody();


        log.info("Download update files");
        applicationEventsService.notifyUi("Скачиваем файлы обновления");

        //Скачиваем файлы в папку обнолений
        String appFilePath = fetchFile(actualAppVersionInfo.getArtifactLink(),
                UPDATE_FILE_PATH + actualAppVersionInfo.getFileName())
                .toAbsolutePath().toString();

        checkFileHash(appFilePath, actualAppVersionInfo.getArtifactHash());

        String updateFilePath = fetchFile(actualUpdaterAppVersionInfo.getArtifactLink(),
                UPDATE_FILE_PATH + actualUpdaterAppVersionInfo.getFileName())
                .toAbsolutePath().toString();

        checkFileHash(updateFilePath, actualUpdaterAppVersionInfo.getArtifactHash());

        log.info("Hash check completed");
        applicationEventsService.notifyUi("Проверка hash сумм пройдена");

        ApplicationHome home = new ApplicationHome();
        String currentApplicationPath = home.getDir().toPath().toAbsolutePath().toString();

        String currentJarPath = ofNullable(home.getSource()).map(s -> s.toPath().toAbsolutePath().toString()).orElse("Не найден JAR");

        StringBuilder commanBuilder = new StringBuilder();
        commanBuilder.append("java -jar").append(" ")
                //запускаем апдейтер
                .append(updateFilePath).append(" ")
                //передаем новый файл
                .append(appFilePath).append(" ")
                //передаем текущую директорию
                .append(currentApplicationPath).append(" ")
                //передаем текущий jar
                .append(currentJarPath);

        log.info("Start updater " + commanBuilder.toString());
        applicationEventsService.notifyUi("Сейчас приложение будет остановлено. Обновите страницу через пару минут");

        Process proc = Runtime.getRuntime().exec(commanBuilder.toString());
        if(proc.isAlive()){
            System.exit(0);
        }

    }

    private void checkFileHash(String appFilePath, String artifactHash) throws Exception {
        FileInputStream fis = new FileInputStream(new File(appFilePath));
        String md5 = DigestUtils.sha1Hex(fis);
        if(!md5.equals(artifactHash)){
            applicationEventsService.notifyUi("Скачка файлов обнолений не удалась. Попробуйте еще раз или проверьте соединение с сетью.");
            log.error("Hash not equals "+appFilePath);
            throw new Exception("Hash not compareble");
        }
        fis.close();
    }


    private Path fetchFile(String fileUrl, String filePathWithName) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_OCTET_STREAM));

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<byte[]> response = restTemplateForFiles.exchange( fileUrl, HttpMethod.GET, entity, byte[].class);
        Path pathResult = Files.write(Paths.get(filePathWithName), response.getBody());
        return pathResult;
    }

    private static File createPathWithParentsOrClear(String path) throws IOException {
        File file = new File(path);
        file.getParentFile().mkdirs();
        file.mkdir();
        FileUtils.cleanDirectory(file);
        return file;
    }

}
