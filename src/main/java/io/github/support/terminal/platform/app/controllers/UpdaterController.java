package io.github.support.terminal.platform.app.controllers;


import io.github.support.terminal.platform.app.updater.services.UpdaterService;
import lombok.RequiredArgsConstructor;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequiredArgsConstructor
public class UpdaterController {

    private final UpdaterService updaterService;

    @PostMapping("/api/run-auto-update")
    public void runAutoUpdate() throws Exception {
        updaterService.runAutoUpdate();
    }

}
