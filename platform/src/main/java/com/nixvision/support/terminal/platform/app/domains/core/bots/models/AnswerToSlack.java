package com.nixvision.support.terminal.platform.app.domains.core.bots.models;


import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.SlackBot;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AnswerToSlack {
    private String channelId;
    private SlackBot bot;
}

