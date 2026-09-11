package com.autopulse.backend.dto;

import com.autopulse.backend.entity.Vehicle;

import java.time.Instant;
import java.util.UUID;

public class VehicleResponse {

    private UUID id;
    private String make;
    private String model;
    private Integer year;
    private String fuelType;
    private String engineType;
    private String vin;
    private String registrationNumber;
    private Instant createdAt;
    private Instant updatedAt;

    public VehicleResponse() {
    }

    public VehicleResponse(
            UUID id,
            String make,
            String model,
            Integer year,
            String fuelType,
            String engineType,
            String vin,
            String registrationNumber,
            Instant createdAt,
            Instant updatedAt
    ) {
        this.id = id;
        this.make = make;
        this.model = model;
        this.year = year;
        this.fuelType = fuelType;
        this.engineType = engineType;
        this.vin = vin;
        this.registrationNumber = registrationNumber;
        this.createdAt = createdAt;
        this.updatedAt = updatedAt;
    }

    public static VehicleResponse fromVehicle(Vehicle vehicle) {
        return new VehicleResponse(
                vehicle.getId(),
                vehicle.getMake(),
                vehicle.getModel(),
                vehicle.getYear(),
                vehicle.getFuelType(),
                vehicle.getEngineType(),
                vehicle.getVin(),
                vehicle.getRegistrationNumber(),
                vehicle.getCreatedAt(),
                vehicle.getUpdatedAt()
        );
    }

    public UUID getId() {
        return id;
    }

    public String getMake() {
        return make;
    }

    public String getModel() {
        return model;
    }

    public Integer getYear() {
        return year;
    }

    public String getFuelType() {
        return fuelType;
    }

    public String getEngineType() {
        return engineType;
    }

    public String getVin() {
        return vin;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public Instant getCreatedAt() {
        return createdAt;
    }

    public Instant getUpdatedAt() {
        return updatedAt;
    }
}