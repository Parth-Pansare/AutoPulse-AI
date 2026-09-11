package com.autopulse.backend.controller;

import com.autopulse.backend.dto.VehicleCreateRequest;
import com.autopulse.backend.dto.VehicleResponse;
import com.autopulse.backend.dto.VehicleUpdateRequest;
import com.autopulse.backend.entity.User;
import com.autopulse.backend.service.VehicleService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.security.core.Authentication;
import org.springframework.web.bind.annotation.*;

import java.util.List;
import java.util.UUID;

@RestController
@RequestMapping("/api/vehicles")
public class VehicleController {

    private final VehicleService vehicleService;

    public VehicleController(VehicleService vehicleService) {
        this.vehicleService = vehicleService;
    }

    @PostMapping
    public ResponseEntity<VehicleResponse> createVehicle(
            @Valid @RequestBody VehicleCreateRequest request,
            Authentication authentication
    ) {

        UUID userId = getAuthenticatedUserId(authentication);

        VehicleResponse response =
                vehicleService.createVehicle(userId, request);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @GetMapping
    public ResponseEntity<List<VehicleResponse>> getVehicles(
            Authentication authentication
    ) {

        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                vehicleService.getUserVehicles(userId)
        );
    }

    @GetMapping("/{vehicleId}")
    public ResponseEntity<VehicleResponse> getVehicle(
            @PathVariable UUID vehicleId,
            Authentication authentication
    ) {

        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                vehicleService.getVehicle(userId, vehicleId)
        );
    }

    @PutMapping("/{vehicleId}")
    public ResponseEntity<VehicleResponse> updateVehicle(
            @PathVariable UUID vehicleId,
            @Valid @RequestBody VehicleUpdateRequest request,
            Authentication authentication
    ) {

        UUID userId = getAuthenticatedUserId(authentication);

        return ResponseEntity.ok(
                vehicleService.updateVehicle(
                        userId,
                        vehicleId,
                        request
                )
        );
    }

    @DeleteMapping("/{vehicleId}")
    public ResponseEntity<Void> deleteVehicle(
            @PathVariable UUID vehicleId,
            Authentication authentication
    ) {

        UUID userId = getAuthenticatedUserId(authentication);

        vehicleService.deleteVehicle(userId, vehicleId);

        return ResponseEntity.noContent().build();
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

        String email = authentication.getName();

        // The JWT currently stores the user's email as its subject.
        // VehicleService needs the corresponding database UUID.
        return vehicleService.getUserIdByEmail(email);
    }
}