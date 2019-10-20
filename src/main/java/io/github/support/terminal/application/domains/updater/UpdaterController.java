package io.github.support.terminal.application.domains.updater;


import io.github.support.terminal.application.domains.updater.services.UpdaterService;
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
