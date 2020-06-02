package io.github.bot.terminal.application.domains.bot_commands.entity;

import lombok.Data;
import org.apache.commons.lang3.StringUtils;

@Data
public class Cmd {

    public static String EMPTY = "_CMD_EMPTY_";

    private String cmd;

    public Cmd(String cmd) {
        this.cmd = StringUtils.defaultString(cmd, EMPTY).trim().toLowerCase();
    }

    @Override
    public String toString() {
        return this.cmd;
    }
}
