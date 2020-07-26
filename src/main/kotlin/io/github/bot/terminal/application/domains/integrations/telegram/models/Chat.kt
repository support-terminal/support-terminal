package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonProperty

class Chat {
    @JsonProperty("id")
    private val id: Int? = null

    @JsonProperty("type")
    private val type: String? = null

    @JsonProperty("title")
    private val title: String? = null

    @JsonProperty("first_name")
    private val firstName: String? = null

    @JsonProperty("last_name")
    private val lastName: String? = null

    @JsonProperty("username")
    private val username: String? = null

    @JsonProperty("all_members_are_administrators")
    private val allMembersAreAdministrators: Boolean? = null
}