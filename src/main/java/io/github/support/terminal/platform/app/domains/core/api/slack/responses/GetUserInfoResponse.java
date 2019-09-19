package io.github.support.terminal.platform.app.domains.core.api.slack.responses;

import io.github.support.terminal.platform.app.domains.core.api.slack.models.User;
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
