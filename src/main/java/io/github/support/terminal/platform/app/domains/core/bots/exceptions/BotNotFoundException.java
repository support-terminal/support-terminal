package io.github.support.terminal.platform.app.domains.core.bots.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="BotNotFoundException")  // 404
public class BotNotFoundException extends Exception {

}
