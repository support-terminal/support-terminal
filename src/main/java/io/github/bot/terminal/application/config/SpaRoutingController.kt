package io.github.bot.terminal.application.config

import org.springframework.stereotype.Controller
import org.springframework.web.bind.annotation.RequestMapping

@Controller
class SpaRoutingController {
    //This is for embedded UI
    @RequestMapping(value = ["/{[path:[^\\.]*}"])
    fun redirect(): String {
        return "forward:/"
    }
}