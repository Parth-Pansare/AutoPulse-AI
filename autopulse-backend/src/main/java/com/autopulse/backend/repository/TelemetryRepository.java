package com.autopulse.backend.repository;

import com.autopulse.backend.entity.Telemetry;
import com.autopulse.backend.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.time.Instant;
import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface TelemetryRepository extends JpaRepository<Telemetry, UUID> {

    List<Telemetry> findAllByVehicleOrderByTimestampDesc(
            Vehicle vehicle
    );

    Optional<Telemetry> findTopByVehicleOrderByTimestampDesc(
            Vehicle vehicle
    );

    List<Telemetry> findAllByVehicleAndTimestampBetweenOrderByTimestampAsc(
            Vehicle vehicle,
            Instant start,
            Instant end
    );
}