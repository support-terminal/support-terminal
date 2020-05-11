package io.github.bot.terminal.application.domains.integrations.slack.responses;

import io.github.bot.terminal.application.domains.integrations.slack.models.User;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class GetUserInfoResponse {
    private Boolean ok;
    private User user;
}
