package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonProperty

import java.util.*


class Message {
    @JsonProperty("message_id")
    private val messageId: String? = null

    @JsonProperty("from")
    private val from: User? = null

    @JsonProperty("chat")
    private val chat: Chat? = null

    @JsonProperty("date")
    private val date: Date? = null

    @JsonProperty("text")
    private val text: String? = null
}