package io.github.bot.terminal.application.domains.integrations.telegram

import io.github.bot.terminal.application.domains.integrations.DocumentFile
import io.github.bot.terminal.application.domains.integrations.telegram.requests.TelegramSendMessageRequest
import io.github.bot.terminal.application.domains.integrations.telegram.requests.UpdateRequest
import io.github.bot.terminal.application.domains.integrations.telegram.responses.SendMessageResponse
import io.github.bot.terminal.application.domains.integrations.telegram.responses.UpdateResponse
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
class TelegramApiClient(private val restTemplate: RestTemplate) {

    fun getUpdates(token: String, updateRequest: UpdateRequest): UpdateResponse {
        val request = HttpEntity(updateRequest)
        return try {
            val responseEntity = restTemplate.exchange("$TELEGRAM_URL/bot{token}/getUpdates", HttpMethod.POST, request, UpdateResponse::class.java, token)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error telegram getUpdates", ex)
            throw RuntimeException(ex)
        }
    }

    fun sendMessage(token: String, telegramSendMessageRequest: TelegramSendMessageRequest): SendMessageResponse {
        val request = HttpEntity(telegramSendMessageRequest)
        return try {
            val responseEntity = restTemplate.exchange("$TELEGRAM_URL/bot{token}/sendMessage", HttpMethod.POST, request, SendMessageResponse::class.java, token)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error telegram sendMessage", ex)
            throw RuntimeException(ex)
        }
    }

    @Throws(IOException::class)
    fun sendDocument(token: String, chatId: String, document: DocumentFile): SendMessageResponse {
        val parts: MultiValueMap<String, Any> = LinkedMultiValueMap<String, Any>()
        val fileAsResource: ByteArrayResource = object : ByteArrayResource(document.bytes) {
            override fun getFilename(): String {
                return document.filename
            }
        }
        parts.add("document", fileAsResource)
        parts.add("chat_id", chatId)
        val httpHeaders = HttpHeaders()
        httpHeaders.contentType = MediaType.MULTIPART_FORM_DATA
        val request: HttpEntity<*> = HttpEntity(parts, httpHeaders)
        return try {
            val responseEntity = restTemplate.exchange("$TELEGRAM_URL/bot{token}/sendDocument", HttpMethod.POST, request, SendMessageResponse::class.java, token)
            responseEntity.body
        } catch (ex: HttpStatusCodeException) {
            log.error("Error telegram sendDocument", ex)
            throw RuntimeException(ex)
        }
    }

    companion object {
        val log: Logger = LoggerFactory.getLogger(javaClass)
        private const val TELEGRAM_URL = "https://api.telegram.org"
    }
}