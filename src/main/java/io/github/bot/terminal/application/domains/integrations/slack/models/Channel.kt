package io.github.bot.terminal.application.domains.integrations.slack.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty
import lombok.Data
import lombok.experimental.Accessors

@Data
@Accessors(chain = true)
@JsonIgnoreProperties(ignoreUnknown = true)
class Channel {
    @JsonProperty("id")
    var id: String? = null

    @JsonProperty("name")
    var name: String? = null
}