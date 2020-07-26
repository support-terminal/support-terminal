package io.github.bot.terminal.application.domains.common.notify

import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest
import org.springframework.stereotype.Service

@Service
class NotifyRestConverter {

    fun mapToDetails(request: NotifyRequest): NotifyDetails =
            NotifyDetails(
                    messageTemplate = request.messageTemplate,
                    notificationApiId = request.notificationApiId
            )

    fun mapToDto(details: NotifyDetails): NotifyDTO =
            NotifyDTO(
                    messageTemplate = details.messageTemplate,
                    notificationApiId = details.notificationApiId
            )
}