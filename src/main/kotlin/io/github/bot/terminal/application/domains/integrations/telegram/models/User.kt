package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonProperty

class User {
    @JsonProperty("id")
    private val id: String? = null

    @JsonProperty("is_bot")
    private val isBot: Boolean? = null

    @JsonProperty("first_name")
    private val firstName: String? = null

    @JsonProperty("last_name")
    private val lastName: String? = null

    @JsonProperty("username")
    private val username: String? = null

    @JsonProperty("language_code")
    private val languageCode: String? = null
}