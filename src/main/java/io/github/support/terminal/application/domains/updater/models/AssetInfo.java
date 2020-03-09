package io.github.support.terminal.application.domains.updater.models;

import com.fasterxml.jackson.annotation.JsonProperty;
import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class AssetInfo {

    private String name; //версия
    @JsonProperty("browser_download_url")
    private String browserDownloadUrl; //ссылка наскачивание

}
