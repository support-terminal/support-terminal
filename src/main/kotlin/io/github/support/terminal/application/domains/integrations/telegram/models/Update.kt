package io.github.support.terminal.application.domains.integrations.telegram.models

import com.fasterxml.jackson.annotation.JsonIgnoreProperties
import com.fasterxml.jackson.annotation.JsonProperty

@JsonIgnoreProperties(ignoreUnknown = true)
data class Update(
        @JsonProperty("update_id") val updateId: Int,
        @JsonProperty("message") val message: Message?
)
