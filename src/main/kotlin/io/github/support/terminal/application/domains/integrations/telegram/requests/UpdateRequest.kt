package io.github.support.terminal.application.domains.integrations.telegram.requests

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

private const val RESPONSE_MESSAGES_LIMIT = 100

@JsonIgnoreProperties(ignoreUnknown = true)
data class UpdateRequest(
        @JsonProperty("offset") val offset: Int,
        @JsonProperty("limit") val limit: Int = RESPONSE_MESSAGES_LIMIT,
        @JsonProperty("timeout") val timeout: Int? = null
)