package io.github.support.terminal.application.domains.processor.text.services;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.client.RestTemplate;

@Configuration
@ComponentScan("io.github.support.terminal.application.domains.processor.text.services")
public class TextProcessServiceTestConfig {


    @Bean
    public RestTemplate getRestTemplate(){
        return new RestTemplate();
    }

}
