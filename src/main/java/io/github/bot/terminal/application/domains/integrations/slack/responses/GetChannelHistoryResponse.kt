package io.github.bot.terminal.application.domains.integrations.slack.responses

import io.github.bot.terminal.application.domains.integrations.slack.models.SlackMessage
import lombok.Data
import lombok.ToString
import lombok.experimental.Accessors

@Data
@ToString
@Accessors(chain = true)
class GetChannelHistoryResponse {
     var ok: Boolean? = null
     var messages: Collection<SlackMessage>? = null
}