package io.github.bot.terminal.application.domains.integrations.slack.requests

import com.fasterxml.jackson.annotation.JsonProperty

class SendMessageRequest {
    @JsonProperty("channel")
    var channel: String? = null

    @JsonProperty("text")
    var text: String? = null

    @JsonProperty("mrkdwn")
    var mrkdwn = true
}