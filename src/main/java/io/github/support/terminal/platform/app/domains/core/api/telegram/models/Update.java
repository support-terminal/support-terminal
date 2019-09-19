package io.github.support.terminal.platform.app.domains.core.api.telegram.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class Update {

    @JsonProperty("update_id")
    private Integer updateId;


    @JsonProperty("message")
    private Message message;
}
