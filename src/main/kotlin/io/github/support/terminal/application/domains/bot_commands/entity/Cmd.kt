package io.github.support.terminal.application.domains.bot_commands.entity

import org.apache.commons.lang3.StringUtils

class Cmd(_message: String) {
    val cmd: String
    init {
        cmd = StringUtils.defaultString(_message.trim(), EMPTY).trim { it <= ' ' }.toLowerCase()
    }

    override fun toString(): String {
        return cmd
    }

    fun isEmpty(): Boolean = cmd == EMPTY

    override fun equals(other: Any?): Boolean {
        if (this === other) return true
        if (javaClass != other?.javaClass) return false
        other as Cmd
        if (cmd != other.cmd) return false
        return true
    }

    override fun hashCode(): Int {
        return cmd.hashCode()
    }

    companion object {
        private var EMPTY = "_CMD_EMPTY_"
    }

}