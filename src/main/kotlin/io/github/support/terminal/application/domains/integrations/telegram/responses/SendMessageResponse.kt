package io.github.support.terminal.application.domains.integrations.telegram.responses

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import io.github.support.terminal.application.domains.integrations.telegram.models.Message

@JsonIgnoreProperties(ignoreUnknown = true)
data class SendMessageResponse (
    @JsonProperty("ok") val ok: Boolean,
    @JsonProperty("result") val result: Message
)