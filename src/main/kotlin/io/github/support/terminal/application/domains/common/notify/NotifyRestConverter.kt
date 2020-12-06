package io.github.support.terminal.application.domains.common.notify

import io.github.support.terminal.application.domains.common.notify.entity.NotifyDetails
import org.springframework.stereotype.Service

@Service
class NotifyRestConverter {

    fun mapToDetails(request: NotifyRequest) =
            NotifyDetails(
                    messageTemplate = request.messageTemplate,
                    notificationApiId = request.notificationApiId
            )

    fun mapToDto(details: NotifyDetails) =
            NotifyDTO(
                    messageTemplate = details.messageTemplate,
                    notificationApiId = details.notificationApiId
            )
}