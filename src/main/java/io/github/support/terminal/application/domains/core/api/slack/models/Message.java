package io.github.support.terminal.application.domains.core.api.slack.models;

import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
public class Message {

    @JsonProperty("type")
    private String type;

    @JsonProperty("user")
    private String user;

    @JsonProperty("text")
    private String text;

    @JsonProperty("ts")
    private Double ts;

}
