package io.github.support.terminal.app.domains.core.api.slack.responses;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageResponse {
    private Boolean ok;
}