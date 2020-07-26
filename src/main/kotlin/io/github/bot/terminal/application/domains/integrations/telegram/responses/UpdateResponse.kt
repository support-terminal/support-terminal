package io.github.bot.terminal.application.domains.integrations.telegram.responses

import com.fasterxml.jackson.annotation.JsonProperty
import io.github.bot.terminal.application.domains.integrations.telegram.models.Update

class UpdateResponse {
    @JsonProperty("ok")
    private val ok: Boolean? = null

    @JsonProperty("result")
    private val result: Collection<Update>? = null
}