package io.github.bot.terminal.application.domains.bot_commands.entity

import org.apache.commons.lang3.StringUtils

class Cmd(cmd: String) {
    private val cmd: String
    init {
        this.cmd = StringUtils.defaultString(cmd, EMPTY).trim { it <= ' ' }.toLowerCase()
    }

    override fun toString(): String {
        return cmd
    }

    fun isNotEmpty(): Boolean = cmd != EMPTY

    companion object {
        private var EMPTY = "_CMD_EMPTY_"
    }
}