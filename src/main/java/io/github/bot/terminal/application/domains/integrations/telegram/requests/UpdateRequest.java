package io.github.bot.terminal.application.domains.integrations.telegram.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class UpdateRequest {

    @JsonProperty("offset")
    private Integer offset;

    @JsonProperty("limit")
    private Integer limit;

    @JsonProperty("timeout")
    private Integer timeout;

}
