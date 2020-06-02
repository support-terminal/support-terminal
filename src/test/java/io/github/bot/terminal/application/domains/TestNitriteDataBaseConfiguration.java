package io.github.bot.terminal.application.domains;

import org.dizitart.no2.Nitrite;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;


@Configuration
public class TestNitriteDataBaseConfiguration {

    @Bean(destroyMethod = "close")
    public Nitrite getNitriteInMemory(){
        return Nitrite.builder()
                .compressed()
                .openOrCreate();
    }

}


