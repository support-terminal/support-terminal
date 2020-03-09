package io.github.support.terminal.application.domains.core.api.telegram.requests;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageRequest {

    @JsonProperty("chat_id")
    private Integer chatId;

    @JsonProperty("text")
    private String text;

    @JsonProperty("parse_mode")
    private String parseMode;

    @JsonProperty("reply_to_message_id")
    private String replyToMessageId;

}
