package io.github.bot.terminal.application.domains.integrations.telegram;


import io.github.bot.terminal.application.domains.integrations.DocumentFile;
import io.github.bot.terminal.application.domains.integrations.telegram.requests.SendMessageRequest;
import io.github.bot.terminal.application.domains.integrations.telegram.requests.UpdateRequest;
import io.github.bot.terminal.application.domains.integrations.telegram.responses.SendMessageResponse;
import io.github.bot.terminal.application.domains.integrations.telegram.responses.UpdateResponse;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.core.io.ByteArrayResource;
import org.springframework.http.*;
import org.springframework.stereotype.Service;
import org.springframework.util.LinkedMultiValueMap;
import org.springframework.util.MultiValueMap;
import org.springframework.web.client.HttpStatusCodeException;
import org.springframework.web.client.RestTemplate;

import java.io.IOException;


@Slf4j
@Service
@RequiredArgsConstructor
public class TelegramApiClient {

    private final RestTemplate restTemplate;
    private static final String TELEGRAM_URL = "https://api.telegram.org";


    public UpdateResponse getUpdates(String token, UpdateRequest updateRequest) {
        HttpEntity<UpdateRequest> request = new HttpEntity<>(updateRequest);
        try {
            ResponseEntity<UpdateResponse> responseEntity
                    = restTemplate.exchange(TELEGRAM_URL + "/bot{token}/getUpdates", HttpMethod.POST, request, UpdateResponse.class, token);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error telegram getUpdates", ex);
            throw new RuntimeException(ex);
        }
    }


    public SendMessageResponse sendMessage(String token, SendMessageRequest sendMessageRequest) {
        HttpEntity<SendMessageRequest> request = new HttpEntity<>(sendMessageRequest);
        try {
            ResponseEntity<SendMessageResponse> responseEntity
                    = restTemplate.exchange(TELEGRAM_URL + "/bot{token}/sendMessage", HttpMethod.POST, request, SendMessageResponse.class, token);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error telegram sendMessage", ex);
            throw new RuntimeException(ex);
        }
    }


    public SendMessageResponse sendDocument(String token, Integer chatId, DocumentFile document) throws IOException {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap();

        ByteArrayResource fileAsResource = new ByteArrayResource(document.getBytes()) {
            @Override
            public String getFilename() {
                return document.getFilename();
            }
        };

        parts.add("document", fileAsResource);
        parts.add("chat_id", chatId);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.MULTIPART_FORM_DATA);
        HttpEntity request = new HttpEntity<>(parts, httpHeaders);
        try {
            ResponseEntity<SendMessageResponse> responseEntity
                    = restTemplate.exchange(TELEGRAM_URL + "/bot{token}/sendDocument", HttpMethod.POST, request, SendMessageResponse.class, token);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error telegram sendDocument", ex);
            throw new RuntimeException(ex);
        }
    }

}
