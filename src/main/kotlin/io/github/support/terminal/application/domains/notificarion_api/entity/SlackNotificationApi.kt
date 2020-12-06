package io.github.support.terminal.application.domains.notificarion_api.entity

import io.github.support.terminal.application.domains.integrations.DocumentFile
import io.github.support.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.support.terminal.application.domains.integrations.slack.models.Channel
import io.github.support.terminal.application.domains.integrations.slack.requests.SlackSendMessageRequest
import io.github.support.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import io.github.support.terminal.application.domains.notificarion_api.repository.SlackNotificationApiDetails

class SlackNotificationApi(override val details: SlackNotificationApiDetails,
                           private val repository: NotificationApiRepository,
                           private val slackApiClient: SlackApiClient) : NotificationApi {

    override val id: String = details.id
    private val chanel: Channel by lazy {
        val channelsResponse = slackApiClient.getСhannels(details.token)
        channelsResponse.channels.firstOrNull { c: Channel ->
            details.chanel == c.name
        } ?: throw IllegalStateException("Could not get connection to slack chanell ${details.chanel}")
    }

    override val lastMessages: List<Message>
        get() {
            val channelHistory = slackApiClient.getChannelHistory(details.token,
                    chanel.id, String.format("%.0f", details.oldest))
            if (true != channelHistory.ok) {
                return emptyList()
            }
            val messages = channelHistory.messages
            if (messages.isNullOrEmpty()) {
                return emptyList()
            }

            messages.sortedBy { it.ts }.reversed()
                    .map { it.ts }
                    .firstOrNull()
                    ?.let {
                        details.incrementOldest((it + 1).toLong())
                    }
            repository.update(details)

            return messages.map { Message(it.text) }
        }

    override fun sendText(text: String) {
        val request = SlackSendMessageRequest(chanel.id, text)
        slackApiClient.sendMessage(details.token, request)
    }

    override fun sendDocument(file: DocumentFile) {
        slackApiClient.sendDocument(details.token, chanel.id, file)
    }

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false

        other as SlackNotificationApi

        if (details != other.details) return false
        if (repository != other.repository) return false
        if (slackApiClient != other.slackApiClient) return false
        if (id != other.id) return false

        return true
    }

    override fun hashCode(): Int {
        var result = details.hashCode()
        result = 31 * result + repository.hashCode()
        result = 31 * result + slackApiClient.hashCode()
        result = 31 * result + id.hashCode()
        return result
    }

}