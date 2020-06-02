package io.github.bot.terminal.application.domains.bot_commands.repository;

import io.github.bot.terminal.application.domains.bot_commands.values.BotCommandState;
import io.github.bot.terminal.application.domains.common.action.entity.ActionDetails;
import lombok.Data;
import lombok.experimental.Accessors;
import org.dizitart.no2.objects.Id;

import java.util.Collection;

@Data
@Accessors(chain = true)
public class BotCommandDetails {
    @Id
    private String id;
    private String name;
    private String cmd;
    private BotCommandState state;
    private ActionDetails actionDetails;
    private Collection<String> botIds;
}
