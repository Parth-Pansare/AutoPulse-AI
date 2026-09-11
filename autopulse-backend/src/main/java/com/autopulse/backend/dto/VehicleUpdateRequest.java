package com.autopulse.backend.dto;

import jakarta.validation.constraints.Max;
import jakarta.validation.constraints.Min;
import jakarta.validation.constraints.Size;

public class VehicleUpdateRequest {

    @Size(max = 100, message = "Make must not exceed 100 characters")
    private String make;

    @Size(max = 100, message = "Model must not exceed 100 characters")
    private String model;

    @Min(value = 1886, message = "Invalid vehicle year")
    @Max(value = 2100, message = "Invalid vehicle year")
    private Integer year;

    @Size(max = 50, message = "Fuel type must not exceed 50 characters")
    private String fuelType;

    @Size(max = 100, message = "Engine type must not exceed 100 characters")
    private String engineType;

    @Size(min = 17, max = 17, message = "VIN must contain exactly 17 characters")
    private String vin;

    @Size(max = 30, message = "Registration number must not exceed 30 characters")
    private String registrationNumber;

    public VehicleUpdateRequest() {
    }

    public String getMake() {
        return make;
    }

    public void setMake(String make) {
        this.make = make;
    }

    public String getModel() {
        return model;
    }

    public void setModel(String model) {
        this.model = model;
    }

    public Integer getYear() {
        return year;
    }

    public void setYear(Integer year) {
        this.year = year;
    }

    public String getFuelType() {
        return fuelType;
    }

    public void setFuelType(String fuelType) {
        this.fuelType = fuelType;
    }

    public String getEngineType() {
        return engineType;
    }

    public void setEngineType(String engineType) {
        this.engineType = engineType;
    }

    public String getVin() {
        return vin;
    }

    public void setVin(String vin) {
        this.vin = vin;
    }

    public String getRegistrationNumber() {
        return registrationNumber;
    }

    public void setRegistrationNumber(String registrationNumber) {
        this.registrationNumber = registrationNumber;
    }
}