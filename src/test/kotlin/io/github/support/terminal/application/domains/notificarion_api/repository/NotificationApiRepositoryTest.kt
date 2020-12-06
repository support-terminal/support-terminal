package io.github.support.terminal.application.domains.notificarion_api.repository

import io.github.support.terminal.application.domains.notificarion_api.NotificationApiRepositoryTestConfig
import io.github.support.terminal.application.domains.notificarion_api.NotificationsApiDataSet
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.BeforeEach
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@Import(NotificationApiRepositoryTestConfig::class)
class NotificationApiRepositoryTest {

    @Autowired
    private lateinit var repository: NotificationApiRepository;

    @BeforeEach
    fun inti() {
        repository.findAll().forEach { d -> repository.deleteById(d.id) }
    }

    @Test
    fun `add slack api details`() {
        addDetails(NotificationsApiDataSet.Slack.SLACK_1.details());
    }

    @Test
    fun `add telegram api details`() {
        addDetails(NotificationsApiDataSet.Telegram.TELEGRAM_1.details());
    }

    fun addDetails(details: NotificationApiDetails) {
        repository.add(details)
        val byId = repository.findById(details.id)
        Assertions.assertEquals(details, byId)
    }

    @Test
    fun `edit slack api details`() {
        editDetails(details = NotificationsApiDataSet.Slack.SLACK_1.details(),
                update = NotificationsApiDataSet.Slack.SLACK_2.details(),
                newVersion = NotificationsApiDataSet.Slack.SLACK_1_UPDATE.details()
        );
    }

    @Test
    fun `edit telegram api details`() {
        editDetails(details = NotificationsApiDataSet.Telegram.TELEGRAM_1.details(),
                update = NotificationsApiDataSet.Telegram.TELEGRAM_2.details(),
                newVersion = NotificationsApiDataSet.Telegram.TELEGRAM_1_UPDATE.details()
        );
    }

    private fun editDetails(details: NotificationApiDetails, update: NotificationApiDetails, newVersion: NotificationApiDetails) {
        repository.add(details)
        repository.findById(details.id)
                ?.let {
                    repository.update(it.merge(update))

                } ?: throw IllegalArgumentException("Details for update not found")
        repository.findById(details.id) ?.let {
            Assertions.assertEquals(newVersion, it)
        } ?: throw IllegalArgumentException("Updated details not found")
    }

    @Test
    fun `find all telegram api details`() {
        repository.add(NotificationsApiDataSet.Telegram.TELEGRAM_1.details())
        repository.add(NotificationsApiDataSet.Slack.SLACK_1.details())

        val expectedResult = listOf(
                NotificationsApiDataSet.Telegram.TELEGRAM_1.details(),
                NotificationsApiDataSet.Slack.SLACK_1.details()
        )

        Assertions.assertEquals(expectedResult, repository.findAll())
    }

    @Test
    fun deleteById() {
        addDetails(NotificationsApiDataSet.Slack.SLACK_1.details())
        repository.deleteById(NotificationsApiDataSet.Slack.SLACK_1.id())
        Assertions.assertNull(repository.findById(NotificationsApiDataSet.Slack.SLACK_1.id()))
    }

}
