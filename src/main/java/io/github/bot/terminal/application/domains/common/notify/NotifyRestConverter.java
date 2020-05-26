package io.github.bot.terminal.application.domains.common.notify;


import io.github.bot.terminal.application.domains.common.notify.dto.NotifyDTO;
import io.github.bot.terminal.application.domains.common.notify.entity.NotifyDetails;
import io.github.bot.terminal.application.domains.common.notify.requests.NotifyRequest;
import lombok.RequiredArgsConstructor;
import org.springframework.stereotype.Service;


@Service
@RequiredArgsConstructor
public class NotifyRestConverter {

    public NotifyDetails mapToDetails(NotifyRequest request) {
        return new NotifyDetails()
                .setMessageTemplate(request.getMessageTemplate())
                .setNotificationApiId(request.getNotificationApiId());
    }

    public NotifyDTO mapToDto(NotifyDetails details) {
        return new NotifyDTO()
                .setMessageTemplate(details.getMessageTemplate())
                .setNotificationApiId(details.getNotificationApiId());
    }
}
