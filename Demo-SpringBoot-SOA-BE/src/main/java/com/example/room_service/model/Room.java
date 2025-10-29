package com.example.room_service.model;

import jakarta.persistence.*;
import java.math.BigDecimal;
import java.time.LocalDateTime;

@Entity
@Table(name = "rooms")
public class Room {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "building_id")
    private Integer buildingId;

    private String name;
    private BigDecimal price;
    private BigDecimal area;

    @Enumerated(EnumType.STRING)
    private Status status;

    private String description;

    @Column(name = "created_at")
    private LocalDateTime createdAt;

    public enum Status {
        AVAILABLE,
        OCCUPIED,
        REPAIRING
    }

    // ----- Constructors -----
    public Room() {}

    public Room(Integer id, Integer buildingId, String name, BigDecimal price, BigDecimal area,
                Status status, String description, LocalDateTime createdAt) {
        this.id = id;
        this.buildingId = buildingId;
        this.name = name;
        this.price = price;
        this.area = area;
        this.status = status;
        this.description = description;
        this.createdAt = createdAt;
    }

    // ----- Getters -----
    public Integer getId() {
        return id;
    }

    public Integer getBuildingId() {
        return buildingId;
    }

    public String getName() {
        return name;
    }

    public BigDecimal getPrice() {
        return price;
    }

    public BigDecimal getArea() {
        return area;
    }

    public Status getStatus() {
        return status;
    }

    public String getDescription() {
        return description;
    }

    public LocalDateTime getCreatedAt() {
        return createdAt;
    }

    // ----- Setters -----
    public void setId(Integer id) {
        this.id = id;
    }

    public void setBuildingId(Integer buildingId) {
        this.buildingId = buildingId;
    }

    public void setName(String name) {
        this.name = name;
    }

    public void setPrice(BigDecimal price) {
        this.price = price;
    }

    public void setArea(BigDecimal area) {
        this.area = area;
    }

    public void setStatus(Status status) {
        this.status = status;
    }

    public void setDescription(String description) {
        this.description = description;
    }

    public void setCreatedAt(LocalDateTime createdAt) {
        this.createdAt = createdAt;
    }
}
