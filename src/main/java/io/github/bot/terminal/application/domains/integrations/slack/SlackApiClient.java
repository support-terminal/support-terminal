package io.github.bot.terminal.application.domains.integrations.slack;


import io.github.bot.terminal.application.domains.integrations.DocumentFile;
import io.github.bot.terminal.application.domains.integrations.slack.requests.SendMessageRequest;
import io.github.bot.terminal.application.domains.integrations.slack.responses.*;
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
public class SlackApiClient {

    private final RestTemplate restTemplate;
    private static final String SLACK_API_URL = "https://slack.com/api";

    public GetChannelsResponse getСhannels(String token){
        try {
            ResponseEntity<GetChannelsResponse> responseEntity
                    = restTemplate.exchange( SLACK_API_URL + "/channels.list?token={token}", HttpMethod.GET, HttpEntity.EMPTY, GetChannelsResponse.class, token);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error slack api im.list", ex);
            throw new RuntimeException(ex);
        }
    }


    public GetChannelHistoryResponse getChannelHistory(String token, String channelId, String oldest){
        try {
            ResponseEntity<GetChannelHistoryResponse> responseEntity
                    = restTemplate.exchange( SLACK_API_URL + "/channels.history?token={token}&channel={channelId}&oldest={oldest}", HttpMethod.GET,
                    HttpEntity.EMPTY, GetChannelHistoryResponse.class, token, channelId, oldest);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error slack api im.history", ex);
            throw new RuntimeException(ex);
        }
    }

    public GetUserInfoResponse getUserInfo(String token, String userId){
        try {
            ResponseEntity<GetUserInfoResponse> responseEntity
                    = restTemplate.exchange( SLACK_API_URL + "/users.info?token={token}&user={user}", HttpMethod.GET,
                    HttpEntity.EMPTY, GetUserInfoResponse.class, token, userId);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error slack api users.info", ex);
            throw new RuntimeException(ex);
        }
    }

    public SendMessageResponse sendMessage(String token, SendMessageRequest sendMessageRequest){

        HttpHeaders headers = new HttpHeaders();
        headers.set("Authorization","Bearer "+token);
        HttpEntity<SendMessageRequest> request = new HttpEntity<>(sendMessageRequest, headers);
        try {
            ResponseEntity<SendMessageResponse> responseEntity
                    = restTemplate.exchange( SLACK_API_URL + "/chat.postMessage", HttpMethod.POST, request, SendMessageResponse.class);
            return responseEntity.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error slack chat.postMessage", ex);
            throw new RuntimeException(ex);
        }
    }

    public FileUploadResponse sendDocument(String token, String channelId, DocumentFile document) throws IOException {
        MultiValueMap<String, Object> parts = new LinkedMultiValueMap();

        ByteArrayResource fileAsResource = new ByteArrayResource(document.getBytes()) {
            @Override
            public String getFilename() {
                return document.getFilename();
            }
        };

        parts.add("file", fileAsResource);
        parts.add("channels", channelId);
        HttpHeaders httpHeaders = new HttpHeaders();
        httpHeaders.setContentType(MediaType.MULTIPART_FORM_DATA);
        httpHeaders.set("Authorization","Bearer "+token);
        HttpEntity request = new HttpEntity<>(parts, httpHeaders);
        try {
            ResponseEntity<FileUploadResponse> exchange = restTemplate.exchange(SLACK_API_URL + "/files.upload", HttpMethod.POST, request, FileUploadResponse.class);
            return exchange.getBody();
        } catch (HttpStatusCodeException ex) {
            log.error("Error slack files.upload", ex);
            throw new RuntimeException(ex);
        }
    }

}
