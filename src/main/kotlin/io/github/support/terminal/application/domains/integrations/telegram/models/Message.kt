package io.github.support.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

import java.util.*

@JsonIgnoreProperties(ignoreUnknown = true)
data class Message(
        @JsonProperty("message_id") val messageId: String?,
        @JsonProperty("from") val from: User,
        @JsonProperty("chat") val chat: Chat,
        @JsonProperty("date") val date: Date,
        @JsonProperty("text") val text: String?
)