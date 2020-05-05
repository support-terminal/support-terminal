package io.github.bot.terminal.application.domains.notificarion_api.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.sun.org.apache.bcel.internal.generic.ANEWARRAY;
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApi;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.AbstractNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.NotificationApiTypeDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.TelegramNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.TelegramNotificationApiRequest;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState;
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType;
import org.junit.jupiter.api.BeforeEach;
import org.junit.jupiter.api.Test;
import org.junit.jupiter.api.extension.ExtendWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.jupiter.MockitoExtension;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;

import java.util.ArrayList;
import java.util.Collections;
import java.util.List;

import static org.hamcrest.core.Is.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.ArgumentMatchers.anyString;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.*;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.jsonPath;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;


@ExtendWith(MockitoExtension.class)
class NotificationApiRestControllerTest {


    @Mock
    private NotificationApiRestService restService;

    @InjectMocks
    private NotificationApiRestController controller;

    private ObjectMapper mapper = new ObjectMapper();

    private MockMvc mockMvc;

    private String type = "type1";
    private String id = "id";
    private String label = "label";
    private String state = NotificationApiState.ENABLED.name();
    private String chanel = "chanel-name";
    private String botFatherName = "botFatherName-name";
    private String token = "token";

    private String id2 = "id2";
    private String label2 = "label2";
    private String state2 = NotificationApiState.DISABLED.name();
    private String chanel2 = "chanel-name2";
    private String botFatherName2 = "botFatherName-name2";
    private String token2 = "token2";

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
    }

    @Test
    public void getAvailableNotificationApiTypes() throws Exception {
        NotificationApiTypeDTO dto = new NotificationApiTypeDTO();
        dto.setType(NotificationApiType.SLACK_BOT.name());
        dto.setLabel(NotificationApiType.SLACK_BOT.getLabel());
        when(restService.types()).thenReturn(Collections.singletonList(dto));

        this.mockMvc.perform(get("/api/notifications-api/types")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())
                .andExpect(jsonPath("$[0].type", is(NotificationApiType.SLACK_BOT.name())))
                .andExpect(jsonPath("$[0].label", is(NotificationApiType.SLACK_BOT.getLabel())));
    }


    @Test
    public void addSlackNotificationApi() throws Exception {

        SlackNotificationApiDTO dto = new SlackNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label);
        dto.setToken(token);
        dto.setChanel(chanel);
        dto.setState(state);
        when(restService.add(any())).thenReturn(dto);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setChanel(chanel);
        request.setState(state);

        this.mockMvc.perform(post("/api/notifications-api")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(jsonPath("$.state", is(state)))
                .andExpect(jsonPath("$.label", is(label)))
                .andExpect(jsonPath("$.chanel", is(chanel)))
                .andExpect(jsonPath("$.token", is(token)));

    }

    @Test
    public void editSlackNotificationApi() throws Exception {

        SlackNotificationApiDTO dto = new SlackNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label2);
        dto.setToken(token2);
        dto.setChanel(chanel2);
        dto.setState(state2);
        when(restService.edit(anyString(), any())).thenReturn(dto);

        SlackNotificationApiRequest request = new SlackNotificationApiRequest();
        request.setLabel(label2);
        request.setToken(token2);
        request.setChanel(chanel2);
        request.setState(state2);

        this.mockMvc.perform(put("/api/notifications-api/"+id)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(jsonPath("$.state", is(state2)))
                .andExpect(jsonPath("$.label", is(label2)))
                .andExpect(jsonPath("$.chanel", is(chanel2)))
                .andExpect(jsonPath("$.token", is(token2)));

    }


    @Test
    public void getSlackNotificationApi() throws Exception {

        SlackNotificationApiDTO dto = new SlackNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label);
        dto.setToken(token);
        dto.setChanel(chanel);
        dto.setState(state);
        when(restService.get(any())).thenReturn(dto);

        this.mockMvc.perform(get("/api/notifications-api/"+id)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(jsonPath("$.state", is(state)))
                .andExpect(jsonPath("$.label", is(label)))
                .andExpect(jsonPath("$.chanel", is(chanel)))
                .andExpect(jsonPath("$.token", is(token)));

    }



    @Test
    public void addTelegramNotificationApi() throws Exception {

        TelegramNotificationApiDTO dto = new TelegramNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label);
        dto.setToken(token);
        dto.setBotFatherName(botFatherName);
        dto.setState(state);
        when(restService.add(any())).thenReturn(dto);

        TelegramNotificationApiRequest request = new TelegramNotificationApiRequest();
        request.setLabel(label);
        request.setToken(token);
        request.setBotFatherName(chanel);
        request.setState(state);

        this.mockMvc.perform(post("/api/notifications-api")
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isCreated())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(jsonPath("$.state", is(state)))
                .andExpect(jsonPath("$.label", is(label)))
                .andExpect(jsonPath("$.botFatherName", is(botFatherName)))
                .andExpect(jsonPath("$.token", is(token)));

    }

    @Test
    public void editTelegramNotificationApi() throws Exception {

        TelegramNotificationApiDTO dto = new TelegramNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label2);
        dto.setToken(token2);
        dto.setBotFatherName(botFatherName2);
        dto.setState(state2);
        when(restService.edit(anyString(), any())).thenReturn(dto);

        TelegramNotificationApiRequest request = new TelegramNotificationApiRequest();
        request.setLabel(label2);
        request.setToken(token2);
        request.setBotFatherName(chanel2);
        request.setState(state2);

        this.mockMvc.perform(put("/api/notifications-api/"+id)
                .content(mapper.writeValueAsString(request))
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(jsonPath("$.state", is(state2)))
                .andExpect(jsonPath("$.label", is(label2)))
                .andExpect(jsonPath("$.botFatherName", is(botFatherName2)))
                .andExpect(jsonPath("$.token", is(token2)));

    }

    @Test
    public void getTelegramNotificationApi() throws Exception {

        TelegramNotificationApiDTO dto = new TelegramNotificationApiDTO();
        dto.setId(id);
        dto.setLabel(label);
        dto.setToken(token);
        dto.setBotFatherName(botFatherName);
        dto.setState(state);
        when(restService.get(any())).thenReturn(dto);

        this.mockMvc.perform(get("/api/notifications-api/"+id)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$.id", is(id)))
                .andExpect(jsonPath("$.type", is(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(jsonPath("$.state", is(state)))
                .andExpect(jsonPath("$.label", is(label)))
                .andExpect(jsonPath("$.botFatherName", is(botFatherName)))
                .andExpect(jsonPath("$.token", is(token)));

    }



    @Test
    public void getListNotificationApi() throws Exception {

        SlackNotificationApiDTO dto1 = new SlackNotificationApiDTO();
        dto1.setId(id);
        dto1.setLabel(label);
        dto1.setType(NotificationApiType.Constants.SLACK_BOT);
        dto1.setToken(token);
        dto1.setChanel(chanel);
        dto1.setState(state);

        TelegramNotificationApiDTO dto2 = new TelegramNotificationApiDTO();
        dto2.setId(id2);
        dto2.setType(NotificationApiType.Constants.TELEGRAM_BOT);
        dto2.setLabel(label2);
        dto2.setToken(token2);
        dto2.setBotFatherName(botFatherName2);
        dto2.setState(state2);


        List<AbstractNotificationApiDTO> c = new ArrayList<>();
        c.add(dto1);
        c.add(dto2);

        when(restService.list()).thenReturn(c);

        this.mockMvc.perform(get("/api/notifications-api")
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isOk())

                .andExpect(jsonPath("$[0].id", is(id)))
                .andExpect(jsonPath("$[0].type", is(NotificationApiType.Constants.SLACK_BOT)))
                .andExpect(jsonPath("$[0].state", is(state)))
                .andExpect(jsonPath("$[0].label", is(label)))
                .andExpect(jsonPath("$[0].chanel", is(chanel)))
                .andExpect(jsonPath("$[0].token", is(token)))

                .andExpect(jsonPath("$[1].id", is(id2)))
                .andExpect(jsonPath("$[1].type", is(NotificationApiType.Constants.TELEGRAM_BOT)))
                .andExpect(jsonPath("$[1].state", is(state2)))
                .andExpect(jsonPath("$[1].label", is(label2)))
                .andExpect(jsonPath("$[1].botFatherName", is(botFatherName2)))
                .andExpect(jsonPath("$[1].token", is(token2)));

    }

    @Test
    public void deleteNotificationApi() throws Exception {
        this.mockMvc.perform(delete("/api/notifications-api/"+id)
                .contentType(MediaType.APPLICATION_JSON))
                .andExpect(status().isNoContent());

    }
}