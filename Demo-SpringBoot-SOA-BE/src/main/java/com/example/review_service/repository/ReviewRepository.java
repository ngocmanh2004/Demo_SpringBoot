package com.example.review_service.repository;

import com.example.review_service.model.Review;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ReviewRepository extends JpaRepository<Review, Integer> {
    List<Review> findByRoomId(Integer roomId);
}
