package io.github.bot.terminal.application.domains.notificarion_api.entity;

import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

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