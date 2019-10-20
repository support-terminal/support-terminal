package io.github.support.terminal.application.domains.core.api.slack.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageRequest {

    @JsonProperty("channel")
    private String channel;

    @JsonProperty("text")
    private String text;

    @JsonProperty("mrkdwn")
    private Boolean mrkdwn = true;

}
