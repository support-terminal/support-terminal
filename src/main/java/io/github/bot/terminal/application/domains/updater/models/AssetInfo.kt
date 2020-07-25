package io.github.bot.terminal.application.domains.updater.models

import com.fasterxml.jackson.annotation.JsonProperty

data class AssetInfo(
        val name: String,
        @JsonProperty("browser_download_url")
        val browserDownloadUrl: String
)
