package com.nixvision.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services.handlers;


import com.nixvision.support.terminal.platform.app.domains.core.action.models.results.ActionResult;
import com.nixvision.support.terminal.platform.app.domains.core.bots.entities.Bot;

interface BotHandler {

   void receiveBot(Bot bot);

   void answerBySqlSelectCommand(ActionResult result);

   void answerBySqlInExcelCommand(ActionResult result);

}
