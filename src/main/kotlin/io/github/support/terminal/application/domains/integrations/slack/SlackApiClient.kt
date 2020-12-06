package io.github.support.terminal.application.domains.integrations.slack

import io.github.support.terminal.application.domains.integrations.DocumentFile
import io.github.support.terminal.application.domains.integrations.slack.requests.SlackSendMessageRequest
import io.github.support.terminal.application.domains.integrations.slack.responses.*
import org.slf4j.Logger
import org.slf4j.LoggerFactory
import org.springframework.core.io.ByteArrayResource
import org.springframework.http.HttpEntity
import org.springframework.http.HttpHeaders
import org.springframework.http.HttpMethod
import org.springframework.http.MediaType
import org.springframework.stereotype.Service
import org.springframework.util.LinkedMultiValueMap
import org.springframework.util.MultiValueMap
import org.springframework.web.client.HttpStatusCodeException
import org.springframework.web.client.RestTemplate
import java.io.IOException

@Service
class SlackApiClient (
        private val restTemplate: RestTemplate
) {
    
    fun getСhannels(token: String): GetChannelsResponse {
        return try {
            val responseEntity = restTemplate.exchange("$SLACK_API_URL/channels.list?token={token}", HttpMethod.GET, HttpEntity.EMPTY, GetChannelsResponse::class.java, token)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error slack api im.list", ex)
            throw RuntimeException(ex)
        }
    }

    fun getChannelHistory(token: String, channelId: String, oldest: String): GetChannelHistoryResponse {
        return try {
            val responseEntity = restTemplate.exchange("$SLACK_API_URL/channels.history?token={token}&channel={channelId}&oldest={oldest}", HttpMethod.GET,
                    HttpEntity.EMPTY, GetChannelHistoryResponse::class.java, token, channelId, oldest)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error slack api im.history", ex)
            throw RuntimeException(ex)
        }
    }

    fun getUserInfo(token: String, userId: String): GetUserInfoResponse {
        return try {
            val responseEntity = restTemplate.exchange("$SLACK_API_URL/users.info?token={token}&user={user}", HttpMethod.GET,
                    HttpEntity.EMPTY, GetUserInfoResponse::class.java, token, userId)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error slack api users.info", ex)
            throw RuntimeException(ex)
        }
    }

    fun sendMessage(token: String, sendMessageRequest: SlackSendMessageRequest): SendMessageResponse {
        val headers = HttpHeaders()
        headers["Authorization"] = "Bearer $token"
        val request = HttpEntity(sendMessageRequest, headers)
        return try {
            val responseEntity = restTemplate.exchange("$SLACK_API_URL/chat.postMessage", HttpMethod.POST, request, SendMessageResponse::class.java)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error slack chat.postMessage", ex)
            throw RuntimeException(ex)
        }
    }

    @Throws(IOException::class)
    fun sendDocument(token: String, channelId: String, document: DocumentFile): FileUploadResponse {
        val parts: MultiValueMap<String, Any> = LinkedMultiValueMap<String, Any>()
        val fileAsResource: ByteArrayResource = object : ByteArrayResource(document.bytes) {
            override fun getFilename(): String {
                return document.filename
            }
        }
        parts.add("file", fileAsResource)
        parts.add("channels", channelId)
        val httpHeaders = HttpHeaders()
        httpHeaders.contentType = MediaType.MULTIPART_FORM_DATA
        httpHeaders["Authorization"] = "Bearer $token"
        val request: HttpEntity<*> = HttpEntity(parts, httpHeaders)
        return try {
            val exchange = restTemplate.exchange("$SLACK_API_URL/files.upload", HttpMethod.POST, request, FileUploadResponse::class.java)
            exchange.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error slack files.upload", ex)
            throw RuntimeException(ex)
        }
    }

    companion object {
        val log: Logger = LoggerFactory.getLogger(javaClass)
        private const val SLACK_API_URL = "https://slack.com/api"
    }
}