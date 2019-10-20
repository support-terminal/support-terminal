package io.github.support.terminal.application.config;

import org.dizitart.no2.Nitrite;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class NitriteDataBaseConfiguration {

    @Value("${storage_path}")
    private String STORAGE_PATH;


    @Bean(destroyMethod = "close")
    public Nitrite getNitrite(){
        Nitrite db = Nitrite.builder()
                .compressed()
                .filePath(STORAGE_PATH)
                .openOrCreate();
        return db;
    }

}


