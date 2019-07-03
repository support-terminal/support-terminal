package com.nixvision.support.terminal.platform.app.domains.core.bots.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="No found")  // 404
public class JoinRequestNotFoundException extends RuntimeException {

}
