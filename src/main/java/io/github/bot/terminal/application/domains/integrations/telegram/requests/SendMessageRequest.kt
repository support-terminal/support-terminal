package io.github.bot.terminal.application.domains.integrations.telegram.requests

import com.fasterxml.jackson.annotation.JsonProperty

class SendMessageRequest {
    @JsonProperty("chat_id")
    private val chatId: Int? = null

    @JsonProperty("text")
    private val text: String? = null

    @JsonProperty("parse_mode")
    private val parseMode: String? = null

    @JsonProperty("reply_to_message_id")
    private val replyToMessageId: String? = null
}