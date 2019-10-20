package io.github.support.terminal.application.domains.updater.services;


import io.github.support.terminal.application.domains.updater.models.ReleaseInfo;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.apache.tomcat.util.http.fileupload.FileUtils;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.stereotype.Service;
import org.springframework.web.client.RestTemplate;

import java.io.File;
import java.io.IOException;

@Slf4j
@Service
@RequiredArgsConstructor
public class UpdaterService {

  // private final ApplicationEventsService applicationEventsService;

   private static String UPDATE_FILE_PATH =
            System.getProperty("user.home") + File.separator + ".support-terminal" + File.separator +"update"+ File.separator;

   private final RestTemplate restTemplate;
   private final RestTemplate restTemplateForFiles;
   private static final String ACTUAL_APP_VERSION_URL = "https://api.github.com/repos/support-terminal/support-terminal/releases/latest";
   private static final String ACTUAL_UPDATER_VERSION_URL = "https://api.github.com/repos/support-terminal/updater/releases/latest";



    //Updater.jar

    /**
     * Запуск автообновления системы
     */
    public void runAutoUpdate() throws Exception {

        log.info("Started application auto-update");
      //  applicationEventsService.notifyUi("Started application auto-update");

        ReleaseInfo actualAppVersionInfo = new RestTemplate().exchange( "https://api.github.com/repos/support-terminal/support-terminal/releases/latest",
                HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();


        System.out.println(actualAppVersionInfo);



 /*       createPathWithParentsOrClear(UPDATE_FILE_PATH);

        final Properties props = System.getProperties();
        props.setProperty("jdk.internal.httpclient.disableHostnameVerification", Boolean.TRUE.toString());

        HttpsURLConnection.setDefaultHostnameVerifier(ALL_TRUSTING_HOSTNAME_VERIFIER);

        SSLContext sslContext = SSLContext.getInstance("SSL");
        sslContext.init(null, ALL_TRUSTING_TRUST_MANAGER, new java.security.SecureRandom());

        HttpsURLConnection.setDefaultSSLSocketFactory(sslContext.getSocketFactory());

        HttpClient httpClient = HttpClient.newBuilder()
                .sslContext(sslContext).build();

        HttpRequest request = HttpRequest.newBuilder().GET().uri(URI.create(ACTUAL_APP_VERSION_URL)).build();

        String response = httpClient.send(request, HttpResponse.BodyHandlers.ofString()).body();

        System.out.println(response);*/

/*

        ReleaseInfo actualAppVersionInfo = restTemplate.exchange( ACTUAL_APP_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();
        ReleaseInfo actualUpdaterAppVersionInfo = restTemplate.exchange( ACTUAL_UPDATER_VERSION_URL, HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();

        log.info("Start download update files");
        applicationEventsService.notifyUi("Start download update files");

        //Скачиваем файлы в папку обнолений
        String appFilePath = fetchFile(actualAppVersionInfo.getAssets().get(0).getBrowserDownloadUrl(),
                UPDATE_FILE_PATH + actualAppVersionInfo.getAssets().get(0).getName())
                .toAbsolutePath().toString();


        String updateFilePath = fetchFile(actualUpdaterAppVersionInfo.getAssets().get(0).getBrowserDownloadUrl(),
                UPDATE_FILE_PATH + actualUpdaterAppVersionInfo.getAssets().get(0).getName())
                .toAbsolutePath().toString();

        applicationEventsService.notifyUi("Download update files completed");

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
        applicationEventsService.notifyUi("The application is going to shutdown. Refresh browser page after 5 minutes");

        Process proc = Runtime.getRuntime().exec(commanBuilder.toString());
        if(proc.isAlive()){
            System.exit(0);
        }
*/

    }


/*
    private Path fetchFile(String fileUrl, String filePathWithName) throws IOException {
        HttpHeaders headers = new HttpHeaders();
        headers.setAccept(Arrays.asList(MediaType.APPLICATION_OCTET_STREAM));

        HttpEntity<String> entity = new HttpEntity<>(headers);

        ResponseEntity<byte[]> response = restTemplateForFiles.exchange( fileUrl, HttpMethod.GET, entity, byte[].class);
        Path pathResult = Files.write(Paths.get(filePathWithName), response.getBody());
        return pathResult;
    }*/

    private static File createPathWithParentsOrClear(String path) throws IOException {
        File file = new File(path);
        file.getParentFile().mkdirs();
        file.mkdir();
        FileUtils.cleanDirectory(file);
        return file;
    }

}
