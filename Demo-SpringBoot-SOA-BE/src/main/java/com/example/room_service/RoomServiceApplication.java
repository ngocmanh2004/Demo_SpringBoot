package com.example.room_service;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import java.util.Map;

@SpringBootApplication
public class RoomServiceApplication {
    public static void main(String[] args) {
        SpringApplication app = new SpringApplication(RoomServiceApplication.class);
        app.setDefaultProperties(Map.of(
                "server.port", "8082",
                "spring.datasource.url", "jdbc:mysql://localhost:3307/room_db?useSSL=false&allowPublicKeyRetrieval=true&serverTimezone=UTC",
                "spring.datasource.username", "root",
                "spring.datasource.password", "root",
                "spring.jpa.hibernate.ddl-auto", "update"
        ));
        app.run(args);
    }
}
