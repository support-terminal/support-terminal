package io.github.support.terminal.application.domains.core.api.telegram.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Date;

@Data
@ToString
@Accessors(chain = true)
public class Message {

    @JsonProperty("message_id")
    private String messageId;

    @JsonProperty("from")
    private User from;

    @JsonProperty("chat")
    private Chat chat;

    @JsonProperty("date")
    private Date date;

    @JsonProperty("text")
    private String text;

}
