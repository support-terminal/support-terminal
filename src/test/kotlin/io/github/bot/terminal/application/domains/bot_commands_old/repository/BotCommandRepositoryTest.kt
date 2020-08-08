/*
package io.github.bot.terminal.application.domains.bot_commands.repository

import io.github.bot.terminal.application.domains.bot_commands.BotCommandsRepositoryTestConfig
import io.github.bot.terminal.application.domains.bot_commands.BotCommandsTestHelper
import io.github.bot.terminal.application.domains.common.action.entity.SqlSelectAsTextActionDetails
import io.github.bot.terminal.application.domains.common.action.values.ActionType
import org.junit.jupiter.api.AfterEach
import org.junit.jupiter.api.Assertions
import org.junit.jupiter.api.Test
import org.junit.jupiter.api.extension.ExtendWith
import org.springframework.beans.factory.annotation.Autowired
import org.springframework.context.annotation.Import
import org.springframework.test.context.junit.jupiter.SpringExtension

@ExtendWith(SpringExtension::class)
@Import(BotCommandsRepositoryTestConfig::class)
internal class BotCommandRepositoryTest : BotCommandsTestHelper() {
    @Autowired
    private val repository: BotCommandRepository? = null

    @AfterEach
    fun clean() {
        repository!!.findAll().stream().forEach { (id1) -> repository.deleteById(id1) }
    }

    @Test
    fun addSqlAsSelectBotCommandDetails() {
        val details = sqlAsSelectBotCommandDetails1
        repository!!.add(details!!)
        val byId: BotCommandDetails = repository.findById(details.id).get()
        Assertions.assertEquals(details.id, byId.id)
        Assertions.assertEquals(name, byId.name)
        Assertions.assertEquals(cmd, byId.cmd)
        assertEquals(state, byId.getState())
        Assertions.assertEquals(botIds[0], byId.botIds.stream().findFirst().get())
        Assertions.assertEquals(name, byId.name)
        val actionDetailsCreated = byId.actionDetails as SqlSelectAsTextActionDetails
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.type)
        Assertions.assertEquals(dbConnectionId, actionDetailsCreated.dbConnectionId)
        Assertions.assertEquals(select, actionDetailsCreated.select)
        Assertions.assertEquals(resultTemplate, actionDetailsCreated.resultTemplate)
    }

    @Test
    fun editSqlAsSelectBotCommandDetails() {
        val details = sqlAsSelectBotCommandDetails1
        repository!!.add(details!!)
        val details2 = sqlAsSelectBotCommandDetails2
        details2.setId(details.id)
        repository.update(details2!!)
        val byId: BotCommandDetails = repository.findById(details2.id).get()
        Assertions.assertEquals(details.id, byId.id)
        Assertions.assertEquals(name2, byId.name)
        Assertions.assertEquals(cmd2, byId.cmd)
        assertEquals(state2, byId.getState())
        Assertions.assertEquals(botIds2[0], byId.botIds.stream().findFirst().get())
        Assertions.assertEquals(name2, byId.name)
        val actionDetailsCreated = byId.actionDetails as SqlSelectAsTextActionDetails
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.type)
        Assertions.assertEquals(dbConnectionId2, actionDetailsCreated.dbConnectionId)
        Assertions.assertEquals(select2, actionDetailsCreated.select)
        Assertions.assertEquals(resultTemplate2, actionDetailsCreated.resultTemplate)
    }

    @Test
    fun deleteSqlAsSelectBotCommandDetails() {
        val details = sqlAsSelectBotCommandDetails1
        repository!!.add(details!!)
        assertTrue(repository.findById(details.id).isPresent())
        repository.deleteById(details.id)
        assertFalse(repository.findById(details.id).isPresent())
    }

    @Test
    fun findAllBotCommandDetails() {
        val details = sqlAsSelectBotCommandDetails1
        details.setId(null)
        repository!!.add(details!!)
        val botCommandDetails = repository.findAll()[0]
        Assertions.assertEquals(details.id, botCommandDetails.id)
        Assertions.assertEquals(name, botCommandDetails.name)
        Assertions.assertEquals(cmd, botCommandDetails.cmd)
        assertEquals(state, botCommandDetails.getState())
        Assertions.assertEquals(botIds[0], botCommandDetails.botIds.stream().findFirst().get())
        Assertions.assertEquals(name, botCommandDetails.name)
        val actionDetailsCreated = botCommandDetails.actionDetails as SqlSelectAsTextActionDetails
        Assertions.assertEquals(ActionType.SQL_SELECT_AS_TEXT, actionDetailsCreated.type)
        Assertions.assertEquals(dbConnectionId, actionDetailsCreated.dbConnectionId)
        Assertions.assertEquals(select, actionDetailsCreated.select)
        Assertions.assertEquals(resultTemplate, actionDetailsCreated.resultTemplate)
    }
}*/
