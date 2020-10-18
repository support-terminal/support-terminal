package io.github.bot.terminal.application.domains.integrations.telegram.requests

import com.fasterxml.jackson.annotation.JsonProperty

private const val RESPONSE_MESSAGES_LIMIT = 100

data class UpdateRequest(
        @JsonProperty("offset") val offset: Int,
        @JsonProperty("limit") val limit: Int = RESPONSE_MESSAGES_LIMIT,
        @JsonProperty("timeout") val timeout: Int? = null
)