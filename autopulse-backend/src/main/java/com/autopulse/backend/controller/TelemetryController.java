package com.autopulse.backend.controller;

import com.autopulse.backend.dto.TelemetryRequest;
import com.autopulse.backend.dto.TelemetryResponse;
import com.autopulse.backend.service.TelemetryService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;
import java.time.Instant;
import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicles/{vehicleId}/telemetry")
public class TelemetryController {

    private final TelemetryService telemetryService;

    public TelemetryController(TelemetryService telemetryService) {
        this.telemetryService = telemetryService;
    }

    @PostMapping
    public ResponseEntity<TelemetryResponse> createTelemetry(
            @PathVariable UUID vehicleId,
            @Valid @RequestBody TelemetryRequest request,
            Authentication authentication
    ) {
        UUID userId = getAuthenticatedUserId(authentication);

        TelemetryResponse response =
                telemetryService.createTelemetry(
                        userId,
                        vehicleId,
                        request
                );

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<TelemetryResponse>> getTelemetry(
            @PathVariable UUID vehicleId,
            Authentication authentication
    ) {
        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                telemetryService.getVehicleTelemetry(
                        userId,
                        vehicleId
                )
        );
    }

    @GetMapping("/latest")
    public ResponseEntity<TelemetryResponse> getLatestTelemetry(
            @PathVariable UUID vehicleId,
            Authentication authentication
    ) {
        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                telemetryService.getLatestTelemetry(
                        userId,
                        vehicleId
                )
        );
    }

    @GetMapping("/range")
    public ResponseEntity<List<TelemetryResponse>> getTelemetryBetween(
            @PathVariable UUID vehicleId,
            @RequestParam Instant start,
            @RequestParam Instant end,
            Authentication authentication
    ) {
        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                telemetryService.getTelemetryBetween(
                        userId,
                        vehicleId,
                        start,
                        end
                )
        );
    }

    private UUID getAuthenticatedUserId(
            Authentication authentication
    ) {
        if (authentication == null ||
                authentication.getName() == null) {

            throw new RuntimeException(
                    "Authenticated user not found"
            );
        }

        return telemetryService.getUserIdByEmail(
                authentication.getName()
        );
    }
}