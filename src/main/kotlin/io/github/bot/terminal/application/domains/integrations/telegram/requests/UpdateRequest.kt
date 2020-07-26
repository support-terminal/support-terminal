package io.github.bot.terminal.application.domains.integrations.telegram.requests

import com.fasterxml.jackson.annotation.JsonProperty

class UpdateRequest {
    @JsonProperty("offset")
    private val offset: Int? = null

    @JsonProperty("limit")
    private val limit: Int? = null

    @JsonProperty("timeout")
    private val timeout: Int? = null
}