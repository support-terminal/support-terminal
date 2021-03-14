package io.github.support.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
data class User (
    @JsonProperty("id") val id: String,
    @JsonProperty("is_bot") val isBot: Boolean,
    @JsonProperty("first_name") val firstName: String,
    @JsonProperty("last_name") val lastName: String?,
    @JsonProperty("username") val username: String,
    @JsonProperty("language_code") val languageCode: String?
)