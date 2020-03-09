package io.github.support.terminal.application.domains.core.bots.models;


import io.github.support.terminal.application.domains.core.bots.entities.TelegramBot;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AnswerToTelegram{
    private Integer chatId;
    private TelegramBot bot;
}

