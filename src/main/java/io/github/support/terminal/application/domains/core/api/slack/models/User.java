package io.github.support.terminal.application.domains.core.api.slack.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class User {

    @JsonProperty("id")
    private String id;

    @JsonProperty("real_name")
    private String realName;

}
