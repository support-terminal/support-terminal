package com.nixvision.support.terminal.platform.app.domains.core.bots.models;


import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.TelegramBot;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AnswerToTelegram{
    private Integer chatId;
    private TelegramBot bot;
}

