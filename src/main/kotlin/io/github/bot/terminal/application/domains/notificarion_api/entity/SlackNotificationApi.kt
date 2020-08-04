package io.github.bot.terminal.application.domains.notificarion_api.entity

import io.github.bot.terminal.application.domains.integrations.DocumentFile
import io.github.bot.terminal.application.domains.integrations.slack.SlackApiClient
import io.github.bot.terminal.application.domains.integrations.slack.models.Channel
import io.github.bot.terminal.application.domains.integrations.slack.requests.SendMessageRequest
import io.github.bot.terminal.application.domains.notificarion_api.repository.NotificationApiRepository
import java.io.IOException

class SlackNotificationApi(override val details: SlackNotificationApiDetails,
                           private val repository: NotificationApiRepository,
                           private val slackApiClient: SlackApiClient) : NotificationApi {


    override val id: String = details.id

    override val lastMessages: List<Message>
        get() {
            chanel?.let {
                val channelHistory = slackApiClient.getChannelHistory(details.token,
                        it.id, String.format("%.0f", details.oldest))
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
                            details.oldest = (it + 1).toLong()
                        }
                repository.update(details)

                return messages
                        .map { Message(it.text) }
                        .toList()
            }?: return emptyList()
        }

    override fun sendMessage(message: Message) {
        chanel?.let { channel: Channel ->
            val request = SendMessageRequest()
            request.text = message.text
            request.channel = channel.id
            slackApiClient.sendMessage(details.token, request)
        }
    }

    override fun sendDocument(file: DocumentFile) {
        chanel?.let { channel: Channel ->
            try {
                slackApiClient.sendDocument(details.token, channel.id, file)
            } catch (e: IOException) {
                throw RuntimeException(e)
            }
        }
    }



    private val chanel: Channel?
        get() {
            val channelsResponse = slackApiClient.getСhannels(details.token)
            return if (true != channelsResponse.ok) {
                null
            } else channelsResponse.channels.firstOrNull{
                c: Channel -> details.chanel == c.name
            }
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