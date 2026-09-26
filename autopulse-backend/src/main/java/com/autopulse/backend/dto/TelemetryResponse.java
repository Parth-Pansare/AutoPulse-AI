package com.autopulse.backend.dto;

import com.autopulse.backend.entity.Telemetry;

import java.time.Instant;
import java.util.UUID;

public class TelemetryResponse {

    private UUID id;
    private UUID vehicleId;
    private Instant timestamp;

    private Integer rpm;
    private Double speed;
    private Double engineLoad;
    private Double coolantTemperature;
    private Double intakeTemperature;
    private Double throttlePosition;
    private Double fuelLevel;
    private Double batteryVoltage;
    private Long engineRuntime;

    public TelemetryResponse() {
    }

    public TelemetryResponse(
            UUID id,
            UUID vehicleId,
            Instant timestamp,
            Integer rpm,
            Double speed,
            Double engineLoad,
            Double coolantTemperature,
            Double intakeTemperature,
            Double throttlePosition,
            Double fuelLevel,
            Double batteryVoltage,
            Long engineRuntime
    ) {
        this.id = id;
        this.vehicleId = vehicleId;
        this.timestamp = timestamp;
        this.rpm = rpm;
        this.speed = speed;
        this.engineLoad = engineLoad;
        this.coolantTemperature = coolantTemperature;
        this.intakeTemperature = intakeTemperature;
        this.throttlePosition = throttlePosition;
        this.fuelLevel = fuelLevel;
        this.batteryVoltage = batteryVoltage;
        this.engineRuntime = engineRuntime;
    }

    public static TelemetryResponse fromTelemetry(Telemetry telemetry) {

        return new TelemetryResponse(
                telemetry.getId(),
                telemetry.getVehicle().getId(),
                telemetry.getTimestamp(),
                telemetry.getRpm(),
                telemetry.getSpeed(),
                telemetry.getEngineLoad(),
                telemetry.getCoolantTemperature(),
                telemetry.getIntakeTemperature(),
                telemetry.getThrottlePosition(),
                telemetry.getFuelLevel(),
                telemetry.getBatteryVoltage(),
                telemetry.getEngineRuntime()
        );
    }

    public UUID getId() {
        return id;
    }

    public UUID getVehicleId() {
        return vehicleId;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public Integer getRpm() {
        return rpm;
    }

    public Double getSpeed() {
        return speed;
    }

    public Double getEngineLoad() {
        return engineLoad;
    }

    public Double getCoolantTemperature() {
        return coolantTemperature;
    }

    public Double getIntakeTemperature() {
        return intakeTemperature;
    }

    public Double getThrottlePosition() {
        return throttlePosition;
    }

    public Double getFuelLevel() {
        return fuelLevel;
    }

    public Double getBatteryVoltage() {
        return batteryVoltage;
    }

    public Long getEngineRuntime() {
        return engineRuntime;
    }
}