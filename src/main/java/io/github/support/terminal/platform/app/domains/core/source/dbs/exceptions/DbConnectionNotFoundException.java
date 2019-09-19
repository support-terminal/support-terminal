package io.github.support.terminal.platform.app.domains.core.source.dbs.exceptions;

import org.springframework.http.HttpStatus;
import org.springframework.web.bind.annotation.ResponseStatus;

@ResponseStatus(value= HttpStatus.NOT_FOUND, reason="No found dbConnection")  // 404
public class DbConnectionNotFoundException extends Exception {

}
