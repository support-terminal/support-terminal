package io.github.bot.terminal.application.domains.integrations.telegram.requests

import com.fasterxml.jackson.annotation.JsonProperty

data class TelegramSendMessageRequest (
    @JsonProperty("chat_id") val chatId: String,
    @JsonProperty("text") val text: String,
    @JsonProperty("parse_mode") val parseMode: String = "HTML",
    @JsonProperty("reply_to_message_id") val replyToMessageId: String? = null
)