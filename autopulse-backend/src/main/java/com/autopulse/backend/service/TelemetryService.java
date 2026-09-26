package com.autopulse.backend.service;

import com.autopulse.backend.dto.TelemetryRequest;
import com.autopulse.backend.dto.TelemetryResponse;
import com.autopulse.backend.entity.Telemetry;
import com.autopulse.backend.entity.User;
import com.autopulse.backend.entity.Vehicle;
import com.autopulse.backend.repository.TelemetryRepository;
import com.autopulse.backend.repository.UserRepository;
import com.autopulse.backend.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.time.Instant;
import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class TelemetryService {

    private final TelemetryRepository telemetryRepository;
    private final VehicleRepository vehicleRepository;
    private final UserRepository userRepository;

    public TelemetryService(
            TelemetryRepository telemetryRepository,
            VehicleRepository vehicleRepository,
            UserRepository userRepository
    ) {
        this.telemetryRepository = telemetryRepository;
        this.vehicleRepository = vehicleRepository;
        this.userRepository = userRepository;
    }

    public TelemetryResponse createTelemetry(
            UUID userId,
            UUID vehicleId,
            TelemetryRequest request
    ) {
        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        Telemetry telemetry = new Telemetry();

        telemetry.setVehicle(vehicle);
        telemetry.setTimestamp(Instant.now());

        telemetry.setRpm(request.getRpm());
        telemetry.setSpeed(request.getSpeed());
        telemetry.setEngineLoad(request.getEngineLoad());
        telemetry.setCoolantTemperature(
                request.getCoolantTemperature()
        );
        telemetry.setIntakeTemperature(
                request.getIntakeTemperature()
        );
        telemetry.setThrottlePosition(
                request.getThrottlePosition()
        );
        telemetry.setFuelLevel(request.getFuelLevel());
        telemetry.setBatteryVoltage(
                request.getBatteryVoltage()
        );
        telemetry.setEngineRuntime(
                request.getEngineRuntime()
        );

        Telemetry savedTelemetry =
                telemetryRepository.save(telemetry);

        return TelemetryResponse.fromTelemetry(savedTelemetry);
    }

    @Transactional(readOnly = true)
    public List<TelemetryResponse> getVehicleTelemetry(
            UUID userId,
            UUID vehicleId
    ) {
        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        return telemetryRepository
                .findAllByVehicleOrderByTimestampDesc(vehicle)
                .stream()
                .map(TelemetryResponse::fromTelemetry)
                .toList();
    }

    @Transactional(readOnly = true)
    public TelemetryResponse getLatestTelemetry(
            UUID userId,
            UUID vehicleId
    ) {
        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        return telemetryRepository
                .findTopByVehicleOrderByTimestampDesc(vehicle)
                .map(TelemetryResponse::fromTelemetry)
                .orElseThrow(() ->
                        new RuntimeException(
                                "No telemetry data found"
                        )
                );
    }

    @Transactional(readOnly = true)
    public List<TelemetryResponse> getTelemetryBetween(
            UUID userId,
            UUID vehicleId,
            Instant start,
            Instant end
    ) {
        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        if (start.isAfter(end)) {
            throw new RuntimeException(
                    "Start time cannot be after end time"
            );
        }

        return telemetryRepository
                .findAllByVehicleAndTimestampBetweenOrderByTimestampAsc(
                        vehicle,
                        start,
                        end
                )
                .stream()
                .map(TelemetryResponse::fromTelemetry)
                .toList();
    }

    public UUID getUserIdByEmail(String email) {
        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException(
                                "Authenticated user not found"
                        )
                )
                .getId();
    }

    private User findUser(UUID userId) {
        return userRepository
                .findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found")
                );
    }
}