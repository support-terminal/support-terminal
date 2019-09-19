package io.github.support.terminal.platform.app.updater.models;

import lombok.Data;
import lombok.experimental.Accessors;

@Data
@Accessors(chain = true)
public class ActualVersionInfo {
    private String version;
    private String fileName;
    private String artifactLink;
    private String artifactHash;
}
