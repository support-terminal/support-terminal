package io.github.bot.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
class Chat (
    @JsonProperty("id") val id: Int,
    @JsonProperty("type") val type: String? = null,
    @JsonProperty("title") val title: String? = null,
    @JsonProperty("first_name") val firstName: String? = null,
    @JsonProperty("last_name") val lastName: String? = null,
    @JsonProperty("username") val username: String? = null,
    @JsonProperty("all_members_are_administrators") val allMembersAreAdministrators: Boolean? = null
)