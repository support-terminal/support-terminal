package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

import java.util.*

@JsonIgnoreProperties(ignoreUnknown = true)
data class Message(
        @JsonProperty("message_id") val messageId: String? = null,
        @JsonProperty("from") val from: User? = null,
        @JsonProperty("chat") val chat: Chat? = null,
        @JsonProperty("date") val date: Date? = null,
        @JsonProperty("text") val text: String = ""
)