package io.github.support.terminal.application.domains.core.cron.models;


import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(callSuper=true)
public class CronEvery5Minutes extends CronFrequency {
    public void validate() {
        cron="0 */5 * ? * *";
    }
}
