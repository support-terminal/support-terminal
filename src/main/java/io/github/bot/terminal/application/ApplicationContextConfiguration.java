package io.github.bot.terminal.application;


import org.apache.commons.lang3.StringUtils;
import org.apache.http.HttpHost;
import org.apache.http.auth.AuthScope;
import org.apache.http.auth.UsernamePasswordCredentials;
import org.apache.http.client.CredentialsProvider;
import org.apache.http.impl.client.BasicCredentialsProvider;
import org.apache.http.impl.client.CloseableHttpClient;
import org.apache.http.impl.client.HttpClientBuilder;
import org.apache.http.impl.client.ProxyAuthenticationStrategy;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.PropertySource;
import org.springframework.http.client.HttpComponentsClientHttpRequestFactory;
import org.springframework.http.converter.ByteArrayHttpMessageConverter;
import org.springframework.scheduling.TaskScheduler;
import org.springframework.scheduling.annotation.EnableAsync;
import org.springframework.scheduling.annotation.EnableScheduling;
import org.springframework.scheduling.concurrent.ThreadPoolTaskExecutor;
import org.springframework.scheduling.concurrent.ThreadPoolTaskScheduler;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.web.client.RestTemplate;

import java.util.concurrent.Executor;

@EnableAsync
@EnableScheduling
@PropertySource(value = "file:${user.home}/.support-terminal/config.properties",
        ignoreResourceNotFound = true)
@SpringBootApplication
public class ApplicationContextConfiguration {


    @Value("${proxy_host:#{null}}")
    private String PROXY_HOST;

    @Value("${proxy_port:#{null}}")
    private Integer PROXY_PORT;

    @Value("${proxy_username:#{null}}")
    private String PROXY_USERNAME;

    @Value("${proxy_password:#{null}}")
    private String PROXY_PASSWORD;

    @Bean
    public PasswordEncoder getPasswordEncoder(){
        return new BCryptPasswordEncoder();
    }

    @Bean(name = "myTaskScheduler")
    public TaskScheduler getMyTaskScheduler(){
        ThreadPoolTaskScheduler taskScheduler = new ThreadPoolTaskScheduler();
        taskScheduler.setPoolSize(5);
        return taskScheduler;
    }

    @Bean
    public RestTemplate restTemplate() {
        RestTemplate restTemplate = new RestTemplate();
        //если нам передали порт и хост
        addProxyIfExists(restTemplate);
        return restTemplate;
    }

    @Bean(name = "threadPoolTaskExecutor")
    public Executor threadPoolTaskExecutor() {
        return new ThreadPoolTaskExecutor();
    }

    @Bean
    public RestTemplate restTemplateForFiles() {
        RestTemplate restTemplate = new RestTemplate();
        addProxyIfExists(restTemplate);
        restTemplate.getMessageConverters().add(new ByteArrayHttpMessageConverter());
        return restTemplate;
    }

    private void addProxyIfExists(RestTemplate restTemplate) {
        //если нам передали порт и хост
        if (!StringUtils.isEmpty(PROXY_HOST) && PROXY_PORT != null) {

            HttpClientBuilder clientBuilder = HttpClientBuilder.create();
            clientBuilder.useSystemProperties();
            clientBuilder.setProxy(new HttpHost(PROXY_HOST.trim(), PROXY_PORT));

            //если креды передали
            if (!StringUtils.isEmpty(PROXY_USERNAME) && !StringUtils.isEmpty(PROXY_PASSWORD)) {
                CredentialsProvider credsProvider = new BasicCredentialsProvider();
                credsProvider.setCredentials(
                        new AuthScope(PROXY_HOST.trim(), PROXY_PORT),
                        new UsernamePasswordCredentials(PROXY_USERNAME.trim(), PROXY_PASSWORD.trim())
                );
                clientBuilder.setDefaultCredentialsProvider(credsProvider);
                clientBuilder.setProxyAuthenticationStrategy(new ProxyAuthenticationStrategy());
            }

            CloseableHttpClient client = clientBuilder.build();
            HttpComponentsClientHttpRequestFactory factory = new HttpComponentsClientHttpRequestFactory();
            factory.setHttpClient(client);
            restTemplate.setRequestFactory(factory);
        }
    }


}
