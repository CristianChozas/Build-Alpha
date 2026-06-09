package com.buildalpha.shared.api;

import java.time.Instant;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@RestController
@RequestMapping("/api/health")
public class HealthController {

    @GetMapping
    public HealthResponse health() {
        return new HealthResponse("Build Alpha Backend", "UP", Instant.now());
    }

    public record HealthResponse(String service, String status, Instant timestamp) {
    }
}
