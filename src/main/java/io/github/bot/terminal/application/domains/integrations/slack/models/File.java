package io.github.bot.terminal.application.domains.integrations.slack.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class File {

    @JsonProperty("id")
    private String id;

}
