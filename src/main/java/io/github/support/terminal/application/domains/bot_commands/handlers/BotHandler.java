package io.github.support.terminal.application.domains.bot_commands.handlers;


import io.github.support.terminal.application.domains.core.action.models.results.ActionResult;
import io.github.support.terminal.application.domains.core.bots.entities.Bot;

interface BotHandler {

   void receiveBot(Bot bot);

   void answerBySqlSelectCommand(ActionResult result);

   void answerBySqlInExcelCommand(ActionResult result);

}
