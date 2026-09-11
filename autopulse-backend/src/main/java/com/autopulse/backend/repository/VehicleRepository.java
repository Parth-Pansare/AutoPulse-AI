package com.autopulse.backend.repository;

import com.autopulse.backend.entity.User;
import com.autopulse.backend.entity.Vehicle;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;
import java.util.Optional;
import java.util.UUID;

public interface VehicleRepository extends JpaRepository<Vehicle, UUID> {

    List<Vehicle> findAllByUser(User user);

    Optional<Vehicle> findByIdAndUser(UUID id, User user);

    boolean existsByVinAndUser(String vin, User user);

    boolean existsByRegistrationNumberAndUser(
            String registrationNumber,
            User user
    );
}