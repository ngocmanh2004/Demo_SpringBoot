package com.example.review_service.controller;

import com.example.review_service.model.Review;
import com.example.review_service.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import java.time.LocalDateTime;
import java.util.List;
import java.util.Optional;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {

    private final ReviewService reviewService;

    public ReviewController(ReviewService reviewService) {
        this.reviewService = reviewService;
    }

    // ✅ Lấy tất cả review
    @GetMapping
    public List<Review> getAllReviews() {
        return reviewService.getAllReviews();
    }

    // ✅ Lấy review theo ID
    @GetMapping("/{id}")
    public ResponseEntity<Review> getReviewById(@PathVariable Integer id) {
        Optional<Review> review = reviewService.getReviewById(id);
        return review.map(ResponseEntity::ok)
                .orElse(ResponseEntity.notFound().build());
    }

    // ✅ Lấy danh sách review theo roomId
    @GetMapping("/room/{roomId}")
    public List<Review> getReviewsByRoom(@PathVariable Integer roomId) {
        return reviewService.getReviewsByRoom(roomId);
    }

    // ✅ Tạo mới review
    @PostMapping
    public ResponseEntity<Review> createReview(@RequestBody Review review) {
        review.setCreatedAt(LocalDateTime.now()); // Ghi thời gian tạo
        Review saved = reviewService.createReview(review);
        return ResponseEntity.ok(saved);
    }

    // ✅ Cập nhật review
    @PutMapping("/{id}")
    public ResponseEntity<Review> updateReview(@PathVariable Integer id, @RequestBody Review review) {
        Review updated = reviewService.updateReview(id, review);
        return ResponseEntity.ok(updated);
    }

    // ✅ Xóa review
    @DeleteMapping("/{id}")
    public ResponseEntity<Void> deleteReview(@PathVariable Integer id) {
        reviewService.deleteReview(id);
        return ResponseEntity.noContent().build();
    }
}
