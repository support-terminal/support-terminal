package io.github.support.terminal.platform.app.domains.core.api.telegram.responses;

import com.fasterxml.jackson.annotation.JsonProperty;
import io.github.support.terminal.platform.app.domains.core.api.telegram.models.Update;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@ToString
@Accessors(chain = true)
public class UpdateResponse {

    @JsonProperty("ok")
    private Boolean ok;

    @JsonProperty("result")
    private Collection<Update> result;

}
