package io.github.bot.terminal.application.domains.updater.models;

import lombok.Data;
import lombok.experimental.Accessors;

import java.util.List;

@Data
@Accessors(chain = true)
public class ReleaseInfo {
    private String name; //версия
    private List<AssetInfo> assets; //файлы релиза
}
