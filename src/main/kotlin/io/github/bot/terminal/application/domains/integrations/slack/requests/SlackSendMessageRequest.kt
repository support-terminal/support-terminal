package io.github.bot.terminal.application.domains.integrations.slack.requests

import com.fasterxml.jackson.annotation.JsonProperty

data class SlackSendMessageRequest (
    @JsonProperty("channel") var channel: String,
    @JsonProperty("text") var text: String,
    @JsonProperty("mrkdwn") var mrkdwn: Boolean = true
)