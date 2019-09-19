package io.github.support.terminal.platform.app.domains.core.bots.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.Date;

@Data
@Accessors(chain = true)
@EqualsAndHashCode(of={"id"})
@JsonIgnoreProperties(ignoreUnknown = true)
public class JoinRequestDTO {
    @Id
    private String id;
    private String accountId;
    private Boolean isBot;
    private String firstName;
    private String state;
    private String lastName;
    private String telegramBotId;
    private Date createdDate;
}