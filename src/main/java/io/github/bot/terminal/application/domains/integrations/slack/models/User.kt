package io.github.bot.terminal.application.domains.integrations.slack.models

import com.fasterxml.jackson.annotation.JsonProperty

class User {
    @JsonProperty("id")
    private val id: String? = null

    @JsonProperty("real_name")
    private val realName: String? = null
}