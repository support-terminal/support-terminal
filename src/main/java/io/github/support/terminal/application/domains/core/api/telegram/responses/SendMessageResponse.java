package io.github.support.terminal.application.domains.core.api.telegram.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.github.support.terminal.application.domains.core.api.telegram.models.Message;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageResponse {

    @JsonProperty("ok")
    private Boolean ok;

    @JsonProperty("result")
    private Message result;

}
