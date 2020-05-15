package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import static org.mockito.ArgumentMatchers.eq;
import static org.mockito.Mockito.times;
import static org.mockito.Mockito.verify;

@ExtendWith(MockitoExtension.class)
class TelegramNotificationApiTest {

    @Mock
    private NotificationApiRepository repository;

    private String id = "id";
    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String botFatherName = "botFatherName-name";
    private String token = "token";


}