package io.github.bot.terminal.application.domains.integrations.slack.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageRequest {

    @JsonProperty("channel")
    public String channel;

    @JsonProperty("text")
    public String text;

    @JsonProperty("mrkdwn")
    public Boolean mrkdwn = true;

}
