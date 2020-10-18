package io.github.bot.terminal.application.domains.integrations.telegram.responses

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import io.github.bot.terminal.application.domains.integrations.telegram.models.Update

@JsonIgnoreProperties(ignoreUnknown = true)
data class UpdateResponse(
        @JsonProperty("ok") val ok: Boolean,
        @JsonProperty("result") val result: Collection<Update> = listOf()
)