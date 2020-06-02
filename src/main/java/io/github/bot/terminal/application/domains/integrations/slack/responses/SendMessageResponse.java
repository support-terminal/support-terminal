package io.github.bot.terminal.application.domains.integrations.slack.responses;

import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class SendMessageResponse {
    private Boolean ok;
}
