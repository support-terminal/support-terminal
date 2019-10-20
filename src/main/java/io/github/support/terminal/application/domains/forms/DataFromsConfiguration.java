package io.github.support.terminal.application.domains.forms;

import io.github.support.terminal.application.domains.forms.domains.data.form.entities.DataForm;
import io.github.support.terminal.application.domains.forms.domains.data.form.entities.DataFormExecution;
import org.dizitart.no2.Nitrite;
import org.dizitart.no2.objects.ObjectRepository;
import org.springframework.boot.SpringBootConfiguration;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.scheduling.annotation.EnableScheduling;

@EnableScheduling
@SpringBootConfiguration
@ComponentScan(value = "io.github.support.terminal.application.domains.forms")
public class DataFromsConfiguration {

    @Bean
    public ObjectRepository<DataForm> getDataFormObjectRepository(Nitrite db){
        ObjectRepository<DataForm> repository = db.getRepository(DataForm.class);
        return repository;
    }

    @Bean
    public ObjectRepository<DataFormExecution> getDataFormExecutionObjectRepository(Nitrite db){
        ObjectRepository<DataFormExecution> repository = db.getRepository(DataFormExecution.class);
        return repository;
    }

}

