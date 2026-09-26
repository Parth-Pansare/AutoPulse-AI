package com.autopulse.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;

public class TelemetryRequest {

    @Min(value = 0, message = "RPM cannot be negative")
    @Max(value = 15000, message = "RPM exceeds realistic range")
    private Integer rpm;

    @Min(value = 0, message = "Speed cannot be negative")
    @Max(value = 400, message = "Speed exceeds realistic range")
    private Double speed;

    @Min(value = 0, message = "Engine load cannot be negative")
    @Max(value = 100, message = "Engine load cannot exceed 100%")
    private Double engineLoad;

    @Min(value = -40, message = "Invalid coolant temperature")
    @Max(value = 150, message = "Invalid coolant temperature")
    private Double coolantTemperature;

    @Min(value = -40, message = "Invalid intake temperature")
    @Max(value = 120, message = "Invalid intake temperature")
    private Double intakeTemperature;

    @Min(value = 0, message = "Throttle position cannot be negative")
    @Max(value = 100, message = "Throttle position cannot exceed 100%")
    private Double throttlePosition;

    @Min(value = 0, message = "Fuel level cannot be negative")
    @Max(value = 100, message = "Fuel level cannot exceed 100%")
    private Double fuelLevel;

    @Min(value = 0, message = "Battery voltage cannot be negative")
    @Max(value = 20, message = "Invalid battery voltage")
    private Double batteryVoltage;

    @Min(value = 0, message = "Engine runtime cannot be negative")
    private Long engineRuntime;

    public TelemetryRequest() {
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