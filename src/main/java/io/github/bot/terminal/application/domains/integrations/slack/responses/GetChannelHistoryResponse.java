package io.github.bot.terminal.application.domains.integrations.slack.responses;

import io.github.bot.terminal.application.domains.integrations.slack.models.SlackMessage;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@ToString
@Accessors(chain = true)
public class GetChannelHistoryResponse {
    private Boolean ok;
    private Collection<SlackMessage> messages;
}
