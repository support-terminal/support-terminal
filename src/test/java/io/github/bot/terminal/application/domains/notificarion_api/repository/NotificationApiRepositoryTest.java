package io.github.bot.terminal.application.domains.notificarion_api.repository;

import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiRepositoryTestConfig;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Import;
import org.springframework.test.context.junit.jupiter.SpringExtension;

import java.util.List;
import java.util.UUID;

import static org.junit.jupiter.api.Assertions.*;


@ExtendWith(SpringExtension.class)
@Import(NotificationApiRepositoryTestConfig.class)
public class NotificationApiRepositoryTest {

    @Autowired
    NotificationApiRepository repository;

    private String slackId = "slackId";
    private String telegramId = "telegramId";

    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String botFatherName = "botFatherName-name";
    private String token = "token";

    private String slackId2 = "slackId2";
    private String telegramId2 = "telegramId2";
    private String label2 = "label2";
    private NotificationApiState state2 = NotificationApiState.DISABLED;
    private String chanel2 = "chanel-name2";
    private String botFatherName2 = "botFatherName-name2";
    private String token2 = "token2";


    @Test
    public void addSlackDetails() {
        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(slackId);
        details.setLabel(label);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        repository.add(details);

        SlackNotificationApiDetails byId = (SlackNotificationApiDetails) repository.findById(slackId).get();
        assertEquals(slackId, byId.getId());
        assertEquals(label, byId.getLabel());
        assertEquals(state, byId.getState());
        assertEquals(token, byId.getToken());
        assertEquals(chanel, byId.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, byId.getType());
    }

    @Test
    public void editSlackDetails() {
        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(slackId2);
        details.setLabel(label);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        repository.add(details);

        details.setLabel(label2);
        details.setState(state2);
        details.setChanel(chanel2);
        details.setToken(token2);

        repository.update(details);

        SlackNotificationApiDetails byId = (SlackNotificationApiDetails) repository.findById(slackId2).get();
        assertEquals(slackId2, byId.getId());
        assertEquals(label2, byId.getLabel());
        assertEquals(state2, byId.getState());
        assertEquals(token2, byId.getToken());
        assertEquals(chanel2, byId.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, byId.getType());
    }

    @Test
    public void addTelegramDetails() {
        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(telegramId);
        details.setLabel(label);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        repository.add(details);

        TelegramNotificationApiDetails byId = (TelegramNotificationApiDetails) repository.findById(telegramId).get();
        assertEquals(telegramId, byId.getId());
        assertEquals(label, byId.getLabel());
        assertEquals(state, byId.getState());
        assertEquals(token, byId.getToken());
        assertEquals(botFatherName, byId.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, byId.getType());
    }

    @Test
    public void editTelegramDetails() {
        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(telegramId2);
        details.setLabel(label);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        repository.add(details);

        details.setLabel(label2);
        details.setState(state2);
        details.setBotFatherName(botFatherName2);
        details.setToken(token2);

        repository.update(details);

        TelegramNotificationApiDetails byId = (TelegramNotificationApiDetails) repository.findById(telegramId2).get();
        assertEquals(telegramId2, byId.getId());
        assertEquals(label2, byId.getLabel());
        assertEquals(state2, byId.getState());
        assertEquals(token2, byId.getToken());
        assertEquals(botFatherName2, byId.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, byId.getType());
    }

    @Test
    public void findAll() {
        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(telegramId);
        details.setLabel(label);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        repository.add(details);

        SlackNotificationApiDetails details2 = new SlackNotificationApiDetails();
        details2.setId(slackId);
        details2.setLabel(label);
        details2.setState(state);
        details2.setChanel(chanel);
        details2.setToken(token);

        repository.add(details2);

        List<NotificationApiDetails> all = repository.findAll();

        TelegramNotificationApiDetails byId = (TelegramNotificationApiDetails) all.get(0);
        assertEquals(telegramId, byId.getId());
        assertEquals(label, byId.getLabel());
        assertEquals(state, byId.getState());
        assertEquals(token, byId.getToken());
        assertEquals(botFatherName, byId.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, byId.getType());

        SlackNotificationApiDetails byId2 = (SlackNotificationApiDetails) all.get(1);
        assertEquals(slackId, byId2.getId());
        assertEquals(label, byId2.getLabel());
        assertEquals(state, byId2.getState());
        assertEquals(token, byId2.getToken());
        assertEquals(chanel, byId2.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, byId2.getType());
        repository.deleteById(telegramId);
        repository.deleteById(slackId);

    }

    @Test
    public void deleteById() {
        String telegramId = UUID.randomUUID().toString();
        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(telegramId);
        details.setLabel(label);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        repository.add(details);
        assertTrue(repository.findById(telegramId).isPresent());

        repository.deleteById(telegramId);
        assertFalse(repository.findById(telegramId).isPresent());
    }

}

