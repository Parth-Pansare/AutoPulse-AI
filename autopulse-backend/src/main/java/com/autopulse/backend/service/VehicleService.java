package com.autopulse.backend.service;

import com.autopulse.backend.dto.VehicleCreateRequest;
import com.autopulse.backend.dto.VehicleResponse;
import com.autopulse.backend.dto.VehicleUpdateRequest;
import com.autopulse.backend.entity.User;
import com.autopulse.backend.entity.Vehicle;
import com.autopulse.backend.repository.UserRepository;
import com.autopulse.backend.repository.VehicleRepository;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.UUID;

@Service
@Transactional
public class VehicleService {

    private final VehicleRepository vehicleRepository;
    private final UserRepository userRepository;

    public VehicleService(
            VehicleRepository vehicleRepository,
            UserRepository userRepository
    ) {
        this.vehicleRepository = vehicleRepository;
        this.userRepository = userRepository;
    }

    public VehicleResponse createVehicle(
            UUID userId,
            VehicleCreateRequest request
    ) {

        User user = findUser(userId);

        validateUniqueIdentifiers(
                request.getVin(),
                request.getRegistrationNumber(),
                user
        );

        Vehicle vehicle = new Vehicle();

        vehicle.setUser(user);
        vehicle.setMake(request.getMake().trim());
        vehicle.setModel(request.getModel().trim());
        vehicle.setYear(request.getYear());
        vehicle.setFuelType(request.getFuelType().trim());

        if (request.getEngineType() != null) {
            vehicle.setEngineType(request.getEngineType().trim());
        }

        if (request.getVin() != null) {
            vehicle.setVin(request.getVin().trim().toUpperCase());
        }

        if (request.getRegistrationNumber() != null) {
            vehicle.setRegistrationNumber(
                    request.getRegistrationNumber()
                            .trim()
                            .toUpperCase()
            );
        }

        Vehicle savedVehicle = vehicleRepository.save(vehicle);

        return VehicleResponse.fromVehicle(savedVehicle);
    }

    @Transactional(readOnly = true)
    public List<VehicleResponse> getUserVehicles(UUID userId) {

        User user = findUser(userId);

        return vehicleRepository.findAllByUser(user)
                .stream()
                .map(VehicleResponse::fromVehicle)
                .toList();
    }

    @Transactional(readOnly = true)
    public VehicleResponse getVehicle(
            UUID userId,
            UUID vehicleId
    ) {

        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        return VehicleResponse.fromVehicle(vehicle);
    }

    public UUID getUserIdByEmail(String email) {

        return userRepository.findByEmail(email)
                .orElseThrow(() ->
                        new RuntimeException("Authenticated user not found")
                )
                .getId();
    }

    public VehicleResponse updateVehicle(
            UUID userId,
            UUID vehicleId,
            VehicleUpdateRequest request
    ) {

        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        if (request.getVin() != null &&
                !request.getVin().equalsIgnoreCase(vehicle.getVin())) {

            if (vehicleRepository.existsByVinAndUser(
                    request.getVin().trim().toUpperCase(),
                    user
            )) {
                throw new RuntimeException(
                        "VIN already registered for another vehicle"
                );
            }

            vehicle.setVin(
                    request.getVin().trim().toUpperCase()
            );
        }

        if (request.getRegistrationNumber() != null &&
                !request.getRegistrationNumber()
                        .equalsIgnoreCase(vehicle.getRegistrationNumber())) {

            if (vehicleRepository.existsByRegistrationNumberAndUser(
                    request.getRegistrationNumber().trim().toUpperCase(),
                    user
            )) {
                throw new RuntimeException(
                        "Registration number already registered for another vehicle"
                );
            }

            vehicle.setRegistrationNumber(
                    request.getRegistrationNumber()
                            .trim()
                            .toUpperCase()
            );
        }

        if (request.getMake() != null) {
            vehicle.setMake(request.getMake().trim());
        }

        if (request.getModel() != null) {
            vehicle.setModel(request.getModel().trim());
        }

        if (request.getYear() != null) {
            vehicle.setYear(request.getYear());
        }

        if (request.getFuelType() != null) {
            vehicle.setFuelType(request.getFuelType().trim());
        }

        if (request.getEngineType() != null) {
            vehicle.setEngineType(request.getEngineType().trim());
        }

        return VehicleResponse.fromVehicle(vehicleRepository.save(vehicle));
    }

    public void deleteVehicle(
            UUID userId,
            UUID vehicleId
    ) {

        User user = findUser(userId);

        Vehicle vehicle = vehicleRepository
                .findByIdAndUser(vehicleId, user)
                .orElseThrow(() ->
                        new RuntimeException("Vehicle not found")
                );

        vehicleRepository.delete(vehicle);
    }

    private User findUser(UUID userId) {

        return userRepository.findById(userId)
                .orElseThrow(() ->
                        new RuntimeException("User not found")
                );
    }

    private void validateUniqueIdentifiers(
            String vin,
            String registrationNumber,
            User user
    ) {

        if (vin != null &&
                vehicleRepository.existsByVinAndUser(
                        vin.trim().toUpperCase(),
                        user
                )) {

            throw new RuntimeException(
                    "VIN already registered for another vehicle"
            );
        }

        if (registrationNumber != null &&
                vehicleRepository.existsByRegistrationNumberAndUser(
                        registrationNumber.trim().toUpperCase(),
                        user
                )) {

            throw new RuntimeException(
                    "Registration number already registered for another vehicle"
            );
        }
    }
}