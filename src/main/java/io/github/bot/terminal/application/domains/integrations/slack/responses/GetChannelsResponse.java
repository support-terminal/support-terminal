package io.github.bot.terminal.application.domains.integrations.slack.responses;

import io.github.bot.terminal.application.domains.integrations.slack.models.Channel;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@ToString
@Accessors(chain = true)
public class GetChannelsResponse {
    public Boolean ok;
    public Collection<Channel> channels;
}
