package io.github.support.terminal.application.domains.core.api.slack.responses;

import io.github.support.terminal.application.domains.core.api.slack.models.File;
import lombok.Data;
import lombok.ToString;
import lombok.experimental.Accessors;

@Data
@ToString
@Accessors(chain = true)
public class FileUploadResponse {
    private Boolean ok;
    private File file;
}
