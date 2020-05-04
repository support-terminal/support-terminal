package io.github.bot.terminal.application.domains.notificarion_api.rest;

import com.fasterxml.jackson.databind.ObjectMapper;
import io.github.bot.terminal.application.domains.notificarion_api.rest.dto.SlackNotificationApiDTO;
import io.github.bot.terminal.application.domains.notificarion_api.rest.requests.SlackNotificationApiRequest;
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

import static org.hamcrest.Matchers.notNullValue;
import static org.hamcrest.core.Is.is;
import static org.mockito.ArgumentMatchers.any;
import static org.mockito.Mockito.when;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
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

    private String id = "id";
    private String label = "label";
    private String state = NotificationApiState.ENABLED.name();
    private String chanel = "chanel-name";
    private String token = "token";

    @BeforeEach
    void setUp() {
        mockMvc = MockMvcBuilders.standaloneSetup(controller).build();
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

}