package io.github.support.terminal.application.domains.integrations.slack.responses

import io.github.support.terminal.application.domains.integrations.slack.models.Channel

class GetChannelsResponse {
    var ok: Boolean? = null
    var channels: Collection<Channel> = listOf()
}