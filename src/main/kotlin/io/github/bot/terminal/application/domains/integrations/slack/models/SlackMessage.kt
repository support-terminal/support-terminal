package io.github.bot.terminal.application.domains.integrations.slack.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
class SlackMessage {
    @JsonProperty("type")
    var type: String? = null

    @JsonProperty("user")
    var user: String? = null

    @JsonProperty("text")
    var text: String = ""

    @JsonProperty("ts")
    var ts: Double? = null
}