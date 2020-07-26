/*
package io.github.bot.terminal.application.domains.notificarion_api.repository

import io.github.bot.terminal.application.domains.notificarion_api.NotificationApiRepositoryTestConfig
import io.github.bot.terminal.application.domains.notificarion_api.entity.NotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.SlackNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.entity.TelegramNotificationApiDetails
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiState
import io.github.bot.terminal.application.domains.notificarion_api.values.NotificationApiType
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension
import java.util.*

@ExtendWith(SpringExtension::class)
@Import(NotificationApiRepositoryTestConfig::class)
class NotificationApiRepositoryTest {
    @Autowired
    var repository: NotificationApiRepository? = null
    private val slackId = "slackId"
    private val telegramId = "telegramId"
    private val label = "label"
    private val state: NotificationApiState = NotificationApiState.ENABLED
    private val chanel = "chanel-name"
    private val botFatherName = "botFatherName-name"
    private val token = "token"
    private val slackId2 = "slackId2"
    private val telegramId2 = "telegramId2"
    private val label2 = "label2"
    private val state2: NotificationApiState = NotificationApiState.DISABLED
    private val chanel2 = "chanel-name2"
    private val botFatherName2 = "botFatherName-name2"
    private val token2 = "token2"

    @Test
    fun addSlackDetails() {
        val details = SlackNotificationApiDetails()
        details.setId(slackId)
        details.label = label
        details.setState(state)
        details.chanel = chanel
        details.token = token
        repository!!.add(details)
        val byId = repository!!.findById(slackId).get() as SlackNotificationApiDetails
        Assertions.assertEquals(slackId, byId.id)
        Assertions.assertEquals(label, byId.label)
        assertEquals(state, byId.getState())
        Assertions.assertEquals(token, byId.token)
        Assertions.assertEquals(chanel, byId.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, byId.type)
    }

    @Test
    fun editSlackDetails() {
        val details = SlackNotificationApiDetails()
        details.setId(slackId2)
        details.label = label
        details.setState(state)
        details.chanel = chanel
        details.token = token
        repository!!.add(details)
        details.label = label2
        details.setState(state2)
        details.chanel = chanel2
        details.token = token2
        repository!!.update(details)
        val byId = repository!!.findById(slackId2).get() as SlackNotificationApiDetails
        Assertions.assertEquals(slackId2, byId.id)
        Assertions.assertEquals(label2, byId.label)
        assertEquals(state2, byId.getState())
        Assertions.assertEquals(token2, byId.token)
        Assertions.assertEquals(chanel2, byId.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, byId.type)
    }

    @Test
    fun addTelegramDetails() {
        val details = TelegramNotificationApiDetails()
        details.setId(telegramId)
        details.label = label
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        repository!!.add(details)
        val byId = repository!!.findById(telegramId).get() as TelegramNotificationApiDetails
        Assertions.assertEquals(telegramId, byId.id)
        Assertions.assertEquals(label, byId.label)
        assertEquals(state, byId.getState())
        Assertions.assertEquals(token, byId.token)
        Assertions.assertEquals(botFatherName, byId.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, byId.type)
    }

    @Test
    fun editTelegramDetails() {
        val details = TelegramNotificationApiDetails()
        details.setId(telegramId2)
        details.label = label
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        repository!!.add(details)
        details.label = label2
        details.setState(state2)
        details.botFatherName = botFatherName2
        details.token = token2
        repository!!.update(details)
        val byId = repository!!.findById(telegramId2).get() as TelegramNotificationApiDetails
        Assertions.assertEquals(telegramId2, byId.id)
        Assertions.assertEquals(label2, byId.label)
        assertEquals(state2, byId.getState())
        Assertions.assertEquals(token2, byId.token)
        Assertions.assertEquals(botFatherName2, byId.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, byId.type)
    }

    @Test
    fun findAll() {
        val details = TelegramNotificationApiDetails()
        details.setId(telegramId)
        details.label = label
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        repository!!.add(details)
        val details2 = SlackNotificationApiDetails()
        details2.setId(slackId)
        details2.label = label
        details2.setState(state)
        details2.chanel = chanel
        details2.token = token
        repository!!.add(details2)
        val all: List<NotificationApiDetails> = repository!!.findAll()
        val byId = all[0] as TelegramNotificationApiDetails
        Assertions.assertEquals(telegramId, byId.id)
        Assertions.assertEquals(label, byId.label)
        assertEquals(state, byId.getState())
        Assertions.assertEquals(token, byId.token)
        Assertions.assertEquals(botFatherName, byId.botFatherName)
        Assertions.assertEquals(NotificationApiType.TELEGRAM_BOT, byId.type)
        val byId2 = all[1] as SlackNotificationApiDetails
        Assertions.assertEquals(slackId, byId2.id)
        Assertions.assertEquals(label, byId2.label)
        assertEquals(state, byId2.getState())
        Assertions.assertEquals(token, byId2.token)
        Assertions.assertEquals(chanel, byId2.chanel)
        Assertions.assertEquals(NotificationApiType.SLACK_BOT, byId2.type)
        repository!!.deleteById(telegramId)
        repository!!.deleteById(slackId)
    }

    @Test
    fun deleteById() {
        val telegramId = UUID.randomUUID().toString()
        val details = TelegramNotificationApiDetails()
        details.setId(telegramId)
        details.label = label
        details.setState(state)
        details.botFatherName = botFatherName
        details.token = token
        repository!!.add(details)
        assertTrue(repository!!.findById(telegramId).isPresent())
        repository!!.deleteById(telegramId)
        assertFalse(repository!!.findById(telegramId).isPresent())
    }
}*/
