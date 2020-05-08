package io.github.bot.terminal.application.domains.notificarion_api.factory;

import io.github.bot.terminal.application.domains.notificarion_api.entity.*;
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.ArgumentCaptor;
import org.mockito.Captor;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

import static org.junit.jupiter.api.Assertions.*;
import static org.mockito.Mockito.*;

@ExtendWith(MockitoExtension.class)
class NotificationApiFactoryTest {

    @Mock
    private NotificationApiRepository repository;

    private NotificationApiFactory factory;

    @Captor
    ArgumentCaptor<SlackNotificationApiDetails> slackDetailsCaptor;
    @Captor
    ArgumentCaptor<TelegramNotificationApiDetails> telegramDetailsCaptor;


    private String label = "label";
    private NotificationApiState state = NotificationApiState.ENABLED;
    private String chanel = "chanel-name";
    private String botFatherName = "botFatherName-name";
    private String token = "token";

    private String id = "id";
    private String id2 = "id2";
    private String label2 = "label2";
    private NotificationApiState state2 = NotificationApiState.DISABLED;
    private String chanel2 = "chanel-name2";
    private String botFatherName2 = "botFatherName-name2";
    private String token2 = "token2";


    @BeforeEach
    void init() {
        factory = new NotificationApiFactory(repository);
    }


    @Test
    void createNewSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        SlackNotificationApi api = (SlackNotificationApi) factory.createNew(details);

        assertNotNull(api.getDetails().getId());
        assertEquals(label, api.getDetails().getLabel());
        assertEquals(state, api.getDetails().getState());
        assertEquals(token, api.getDetails().getToken());
        assertEquals(chanel, api.getDetails().getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType());

        verify(repository, times(1)).add(slackDetailsCaptor.capture());
        SlackNotificationApiDetails passedDetails = slackDetailsCaptor.getValue();
        assertEquals(label, passedDetails.getLabel());
        assertEquals(state, passedDetails.getState());
        assertEquals(token, passedDetails.getToken());
        assertEquals(chanel, passedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, passedDetails.getType());

    }


    @Test
    void mergeSlackNotificationApi() {

        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        when(repository.findById(eq(id))).thenReturn(Optional.of(details));


        SlackNotificationApiDetails detailsUpdate = new SlackNotificationApiDetails();
        detailsUpdate.setLabel(label2);
        detailsUpdate.setState(state2);
        detailsUpdate.setChanel(chanel2);
        detailsUpdate.setToken(token2);

        SlackNotificationApi api = (SlackNotificationApi) factory.merge(id, detailsUpdate);

        assertNotNull(api.getDetails().getId());
        assertEquals(id, api.getDetails().getId());
        assertEquals(label2, api.getDetails().getLabel());
        assertEquals(state2, api.getDetails().getState());
        assertEquals(token2, api.getDetails().getToken());
        assertEquals(chanel2, api.getDetails().getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType());

        verify(repository, times(1)).update(slackDetailsCaptor.capture());
        SlackNotificationApiDetails passedDetails = slackDetailsCaptor.getValue();
        assertEquals(id, passedDetails.getId());
        assertEquals(label2, passedDetails.getLabel());
        assertEquals(state2, passedDetails.getState());
        assertEquals(token2, passedDetails.getToken());
        assertEquals(chanel2, passedDetails.getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, passedDetails.getType());

    }

    @Test
    void createNewTelegramNotificationApi() {

        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setLabel(label);
        details.setType(NotificationApiType.TELEGRAM_BOT);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        TelegramNotificationApi api = (TelegramNotificationApi) factory.createNew(details);

        assertNotNull(api.getDetails().getId());
        assertEquals(label, api.getDetails().getLabel());
        assertEquals(state, api.getDetails().getState());
        assertEquals(token, api.getDetails().getToken());
        assertEquals(botFatherName, api.getDetails().getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, api.getDetails().getType());

        verify(repository, times(1)).add(telegramDetailsCaptor.capture());
        TelegramNotificationApiDetails passedDetails = telegramDetailsCaptor.getValue();
        assertEquals(label, passedDetails.getLabel());
        assertEquals(state, passedDetails.getState());
        assertEquals(token, passedDetails.getToken());
        assertEquals(botFatherName, passedDetails.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, passedDetails.getType());

    }


    @Test
    void mergeTelegramNotificationApi() {

        TelegramNotificationApiDetails details = new TelegramNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setState(state);
        details.setBotFatherName(botFatherName);
        details.setToken(token);

        when(repository.findById(eq(id))).thenReturn(Optional.of(details));

        TelegramNotificationApiDetails detailsUpdate = new TelegramNotificationApiDetails();
        detailsUpdate.setLabel(label2);
        detailsUpdate.setState(state2);
        detailsUpdate.setBotFatherName(botFatherName2);
        detailsUpdate.setToken(token2);

        TelegramNotificationApi api = (TelegramNotificationApi) factory.merge(id, detailsUpdate);

        assertNotNull(api.getDetails().getId());
        assertEquals(id, api.getDetails().getId());
        assertEquals(label2, api.getDetails().getLabel());
        assertEquals(state2, api.getDetails().getState());
        assertEquals(token2, api.getDetails().getToken());
        assertEquals(botFatherName2, api.getDetails().getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, api.getDetails().getType());

        verify(repository, times(1)).update(telegramDetailsCaptor.capture());
        TelegramNotificationApiDetails passedDetails = telegramDetailsCaptor.getValue();
        assertEquals(id, passedDetails.getId());
        assertEquals(label2, passedDetails.getLabel());
        assertEquals(state2, passedDetails.getState());
        assertEquals(token2, passedDetails.getToken());
        assertEquals(botFatherName2, passedDetails.getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, passedDetails.getType());

    }

    @Test
    public void getAll() {
        SlackNotificationApiDetails details = new SlackNotificationApiDetails();
        details.setId(id);
        details.setLabel(label);
        details.setType(NotificationApiType.SLACK_BOT);
        details.setState(state);
        details.setChanel(chanel);
        details.setToken(token);

        TelegramNotificationApiDetails details2 = new TelegramNotificationApiDetails();
        details2.setId(id2);
        details2.setLabel(label2);
        details2.setType(NotificationApiType.TELEGRAM_BOT);
        details2.setState(state2);
        details2.setBotFatherName(botFatherName2);
        details2.setToken(token2);

        List<NotificationApiDetails> c = new ArrayList();
        c.add(details);
        c.add(details2);

        when(repository.findAll())
                .thenReturn(c);

        List<NotificationApi<?>> list = factory.getAll();

        SlackNotificationApi api1 = (SlackNotificationApi) list.get(0);
        assertEquals(id, api1.getDetails().getId());
        assertEquals(label, api1.getDetails().getLabel());
        assertEquals(state, api1.getDetails().getState());
        assertEquals(token, api1.getDetails().getToken());
        assertEquals(chanel, api1.getDetails().getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, api1.getDetails().getType());

        TelegramNotificationApi api2 = (TelegramNotificationApi) list.get(1);
        assertEquals(id2, api2.getDetails().getId());
        assertEquals(label2, api2.getDetails().getLabel());
        assertEquals(state2, api2.getDetails().getState());
        assertEquals(token2, api2.getDetails().getToken());
        assertEquals(botFatherName2, api2.getDetails().getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, api2.getDetails().getType());

    }


    @Test
    void byIdNotificationApi() {

        SlackNotificationApiDetails details1 = new SlackNotificationApiDetails();
        details1.setId(id);
        details1.setLabel(label);
        details1.setType(NotificationApiType.SLACK_BOT);
        details1.setState(state);
        details1.setChanel(chanel);
        details1.setToken(token);
        when(repository.findById(eq(id))).thenReturn(Optional.of(details1));

        TelegramNotificationApiDetails details2 = new TelegramNotificationApiDetails();
        details2.setId(id2);
        details2.setLabel(label2);
        details2.setState(state2);
        details2.setBotFatherName(botFatherName2);
        details2.setToken(token2);

        when(repository.findById(eq(id2))).thenReturn(Optional.of(details2));


        SlackNotificationApi api = (SlackNotificationApi) factory.byId(id);

        assertNotNull(api.getDetails().getId());
        assertEquals(id, api.getDetails().getId());
        assertEquals(label, api.getDetails().getLabel());
        assertEquals(state, api.getDetails().getState());
        assertEquals(token, api.getDetails().getToken());
        assertEquals(chanel, api.getDetails().getChanel());
        assertEquals(NotificationApiType.SLACK_BOT, api.getDetails().getType());

        TelegramNotificationApi api2 = (TelegramNotificationApi) factory.byId(id2);

        assertNotNull(api2.getDetails().getId());
        assertEquals(id2, api2.getDetails().getId());
        assertEquals(label2, api2.getDetails().getLabel());
        assertEquals(state2, api2.getDetails().getState());
        assertEquals(token2, api2.getDetails().getToken());
        assertEquals(botFatherName2, api2.getDetails().getBotFatherName());
        assertEquals(NotificationApiType.TELEGRAM_BOT, api2.getDetails().getType());


    }

    @Test
    void byIdNotFound() {
        when(repository.findById(eq(id))).thenReturn(Optional.empty());
        assertThrows(IllegalArgumentException.class, () -> {
            factory.byId(id);
        });
    }

    @Test
    void createUnknownType() {
        SlackNotificationApiDetails details1 = new SlackNotificationApiDetails();
        details1.setId(id);
        details1.setLabel(label);
        details1.setType(null);
        details1.setState(state);
        details1.setChanel(chanel);
        details1.setToken(token);
        when(repository.findById(eq(id))).thenReturn(Optional.of(details1));
        assertThrows(IllegalArgumentException.class, () -> {
            factory.byId(id);
        });

    }

}