package io.github.support.terminal.application.domains.integrations.slack.responses

import io.github.support.terminal.application.domains.integrations.slack.models.SlackMessage

class GetChannelHistoryResponse {
     var ok: Boolean? = null
     var messages: Collection<SlackMessage>? = null
}