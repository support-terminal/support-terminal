package io.github.bot.terminal.application.domains.integrations.telegram.responses

import com.fasterxml.jackson.annotation.JsonProperty
import io.github.bot.terminal.application.domains.integrations.telegram.models.Message

class SendMessageResponse {
    @JsonProperty("ok")
    private val ok: Boolean? = null

    @JsonProperty("result")
    private val result: Message? = null
}