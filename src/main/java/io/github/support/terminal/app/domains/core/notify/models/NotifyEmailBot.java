package io.github.support.terminal.app.domains.core.notify.models;


import lombok.Data;
import lombok.EqualsAndHashCode;

import java.util.List;

@Data
@EqualsAndHashCode(callSuper = true)
public class NotifyEmailBot extends Notify {
    private List<String> notifyEmails;
    private String subjectTemplate;
}
