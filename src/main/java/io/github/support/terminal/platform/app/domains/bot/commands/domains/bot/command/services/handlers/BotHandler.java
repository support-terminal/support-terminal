package io.github.support.terminal.platform.app.domains.bot.commands.domains.bot.command.services.handlers;


import io.github.support.terminal.platform.app.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.platform.app.domains.core.bots.entities.Bot;

interface BotHandler {

   void receiveBot(Bot bot);

   void answerBySqlSelectCommand(ActionResult result);

   void answerBySqlInExcelCommand(ActionResult result);

}
