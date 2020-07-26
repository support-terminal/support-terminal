package io.github.bot.terminal.application.domains.integrations.slack.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
class Channel {
    @JsonProperty("id")
    var id: String = ""

    @JsonProperty("name")
    var name: String = ""
}