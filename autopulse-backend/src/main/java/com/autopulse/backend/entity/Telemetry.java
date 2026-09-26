package com.autopulse.backend.entity;

import jakarta.persistence.*;

import java.time.Instant;
import java.util.UUID;

@Entity
@Table(
        name = "telemetry",
        indexes = {
                @Index(
                        name = "idx_telemetry_vehicle_timestamp",
                        columnList = "vehicle_id,timestamp"
                )
        }
)
public class Telemetry {

    @Id
    @GeneratedValue(strategy = GenerationType.UUID)
    private UUID id;

    @ManyToOne(fetch = FetchType.LAZY, optional = false)
    @JoinColumn(
            name = "vehicle_id",
            nullable = false,
            foreignKey = @ForeignKey(name = "fk_telemetry_vehicle")
    )
    private Vehicle vehicle;

    @Column(nullable = false)
    private Instant timestamp;

    @Column
    private Integer rpm;

    @Column
    private Double speed;

    @Column(name = "engine_load")
    private Double engineLoad;

    @Column(name = "coolant_temperature")
    private Double coolantTemperature;

    @Column(name = "intake_temperature")
    private Double intakeTemperature;

    @Column(name = "throttle_position")
    private Double throttlePosition;

    @Column(name = "fuel_level")
    private Double fuelLevel;

    @Column(name = "battery_voltage")
    private Double batteryVoltage;

    @Column(name = "engine_runtime")
    private Long engineRuntime;

    public Telemetry() {
    }

    public UUID getId() {
        return id;
    }

    public Vehicle getVehicle() {
        return vehicle;
    }

    public void setVehicle(Vehicle vehicle) {
        this.vehicle = vehicle;
    }

    public Instant getTimestamp() {
        return timestamp;
    }

    public void setTimestamp(Instant timestamp) {
        this.timestamp = timestamp;
    }

    public Integer getRpm() {
        return rpm;
    }

    public void setRpm(Integer rpm) {
        this.rpm = rpm;
    }

    public Double getSpeed() {
        return speed;
    }

    public void setSpeed(Double speed) {
        this.speed = speed;
    }

    public Double getEngineLoad() {
        return engineLoad;
    }

    public void setEngineLoad(Double engineLoad) {
        this.engineLoad = engineLoad;
    }

    public Double getCoolantTemperature() {
        return coolantTemperature;
    }

    public void setCoolantTemperature(Double coolantTemperature) {
        this.coolantTemperature = coolantTemperature;
    }

    public Double getIntakeTemperature() {
        return intakeTemperature;
    }

    public void setIntakeTemperature(Double intakeTemperature) {
        this.intakeTemperature = intakeTemperature;
    }

    public Double getThrottlePosition() {
        return throttlePosition;
    }

    public void setThrottlePosition(Double throttlePosition) {
        this.throttlePosition = throttlePosition;
    }

    public Double getFuelLevel() {
        return fuelLevel;
    }

    public void setFuelLevel(Double fuelLevel) {
        this.fuelLevel = fuelLevel;
    }

    public Double getBatteryVoltage() {
        return batteryVoltage;
    }

    public void setBatteryVoltage(Double batteryVoltage) {
        this.batteryVoltage = batteryVoltage;
    }

    public Long getEngineRuntime() {
        return engineRuntime;
    }

    public void setEngineRuntime(Long engineRuntime) {
        this.engineRuntime = engineRuntime;
    }
}