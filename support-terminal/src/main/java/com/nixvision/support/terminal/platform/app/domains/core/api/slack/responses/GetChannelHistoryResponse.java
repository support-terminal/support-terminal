package com.nixvision.support.terminal.platform.app.domains.core.api.slack.responses;

import com.nixvision.support.terminal.platform.app.domains.core.api.slack.models.Message;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

import java.util.Collection;

@Data
@ToString
@Accessors(chain = true)
public class GetChannelHistoryResponse {
    private Boolean ok;
    private Collection<Message> messages;
}
