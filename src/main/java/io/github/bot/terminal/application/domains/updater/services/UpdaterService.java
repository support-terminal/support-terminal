package io.github.bot.terminal.application.domains.updater.services;


import io.github.bot.terminal.application.domains.events.services.ApplicationEventsService;
import io.github.bot.terminal.application.domains.updater.models.ReleaseInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.boot.system.ApplicationHome;
import org.springframework.http.*;
import org.springframework.jmx.export.annotation.ManagedOperation;
import org.springframework.jmx.export.annotation.ManagedResource;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;
import java.nio.file.Files;
import java.nio.file.Path;
import java.nio.file.Paths;
import java.util.Arrays;

import static java.util.Optional.ofNullable;

@Slf4j
@Service
@ManagedResource
@RequiredArgsConstructor
public class UpdaterService {

    private static String UPDATE_FILE_PATH =
            System.getProperty("user.home") + File.separator + ".support-terminal" + File.separator + "update" + File.separator;

    private final RestTemplate restTemplate;
    private final RestTemplate restTemplateForFiles;
    private final ApplicationEventsService eventsService;
    private static final String ACTUAL_APP_VERSION_URL = "https://api.github.com/repos/support-terminal/support-terminal/releases/latest";
    private static final String ACTUAL_UPDATER_VERSION_URL = "https://api.github.com/repos/support-terminal/updater/releases/latest";

    @ManagedOperation
    public void runAutoUpdate() throws Exception {

        log.info("Started application auto-update");
        eventsService.notifyInfo("Started application auto-update");

        createPathWithParentsOrClear(UPDATE_FILE_PATH);

        ReleaseInfo actualAppVersionInfo = restTemplate.exchange(ACTUAL_APP_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();
        ReleaseInfo actualUpdaterAppVersionInfo = restTemplate.exchange(ACTUAL_UPDATER_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();

        log.info("Start download update files");
        eventsService.notifyInfo("Start download update files");

        //Скачиваем файлы в папку обнолений
        String appFilePath = fetchFile(actualAppVersionInfo.getAssets().get(0).getBrowserDownloadUrl(),
                UPDATE_FILE_PATH + actualAppVersionInfo.getAssets().get(0).getName())
                .toAbsolutePath().toString();


        String updateFilePath = fetchFile(actualUpdaterAppVersionInfo.getAssets().get(0).getBrowserDownloadUrl(),
                UPDATE_FILE_PATH + actualUpdaterAppVersionInfo.getAssets().get(0).getName())
                .toAbsolutePath().toString();

        eventsService.notifyInfo("Download update files completed");

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
        eventsService.notifyInfo("The application is going to shutdown. Refresh browser page after 5 minutes");

        Process proc = Runtime.getRuntime().exec(commanBuilder.toString());
        if (proc.isAlive()) {
            System.exit(0);
        }

    }


    private Path fetchFile(String fileUrl, String filePathWithName) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_OCTET_STREAM));

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<byte[]> response = restTemplateForFiles.exchange(fileUrl, HttpMethod.GET, entity, byte[].class);
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
