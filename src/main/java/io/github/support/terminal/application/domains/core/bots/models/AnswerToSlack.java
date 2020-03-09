package io.github.support.terminal.application.domains.core.bots.models;


import io.github.support.terminal.application.domains.core.bots.entities.SlackBot;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AnswerToSlack {
    private String channelId;
    private SlackBot bot;
}

