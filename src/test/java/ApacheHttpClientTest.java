import io.github.support.terminal.application.domains.updater.models.ReleaseInfo;
import org.apache.http.client.HttpClient;
import org.apache.http.conn.ssl.NoopHostnameVerifier;
import org.apache.http.conn.ssl.TrustAllStrategy;
import org.apache.http.impl.client.HttpClients;
import org.apache.http.ssl.SSLContextBuilder;
import org.junit.Before;
import org.junit.Test;
import org.springframework.http.HttpEntity;
import org.springframework.http.HttpMethod;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;
import java.security.KeyManagementException;
import java.security.KeyStoreException;
import java.security.NoSuchAlgorithmException;

public class ApacheHttpClientTest {

    private  RestTemplate restTemplate;

    @Before
    public void initClient() throws NoSuchAlgorithmException, KeyManagementException, KeyStoreException {
        HttpClient httpClient = HttpClients
                .custom()
                .setSSLContext(new SSLContextBuilder().loadTrustMaterial(null, TrustAllStrategy.INSTANCE).build())
                .setSSLHostnameVerifier(NoopHostnameVerifier.INSTANCE)
                .build();
        HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
        factory.setHttpClient(httpClient);

        restTemplate = new RestTemplate();
     //   restTemplate.setRequestFactory(factory);
    }

    @Test
    public void apacheHttpClient455Test() throws IOException {
        ReleaseInfo actualAppVersionInfo = restTemplate.exchange( "https://api.github.com/repos/support-terminal/support-terminal/releases/latest",
                HttpMethod.GET, HttpEntity.EMPTY, ReleaseInfo.class).getBody();


        System.out.println(actualAppVersionInfo);


  //      executeRequestAndVerifyStatusIsOk("https://wrong.host.badssl.com");
    }


}