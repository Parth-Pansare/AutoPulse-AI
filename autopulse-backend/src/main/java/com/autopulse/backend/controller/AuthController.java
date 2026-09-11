package com.autopulse.backend.controller;

import com.autopulse.backend.dto.LoginRequest;
import com.autopulse.backend.dto.LoginResponse;
import com.autopulse.backend.dto.RegisterRequest;
import com.autopulse.backend.dto.UserResponse;
import com.autopulse.backend.entity.User;
import com.autopulse.backend.service.UserService;
import jakarta.validation.Valid;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/auth")
public class AuthController {

    private final UserService userService;

    public AuthController(UserService userService) {
        this.userService = userService;
    }

    @PostMapping("/register")
    public ResponseEntity<UserResponse> register(
            @Valid @RequestBody RegisterRequest request
    ) {

        User user = new User(
                request.getFullName(),
                request.getEmail(),
                request.getPassword()
        );

        User savedUser = userService.createUser(user);

        UserResponse response = UserResponse.fromUser(savedUser);

        return ResponseEntity
                .status(HttpStatus.CREATED)
                .body(response);
    }

    @PostMapping("/login")
    public ResponseEntity<LoginResponse> login(
            @Valid @RequestBody LoginRequest request
    ) {

        String token = userService.login(
                request.getEmail(),
                request.getPassword()
        );

        User user = userService.getUserByEmail(request.getEmail())
                .orElseThrow(() ->
                        new RuntimeException("User not found")
                );

        LoginResponse response = new LoginResponse(
                token,
                "Bearer",
                UserResponse.fromUser(user)
        );

        return ResponseEntity.ok(response);
    }
}