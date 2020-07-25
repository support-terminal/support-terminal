package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonProperty

class Update {
    @JsonProperty("update_id")
    private val updateId: Int? = null

    @JsonProperty("message")
    private val message: Message? = null
}