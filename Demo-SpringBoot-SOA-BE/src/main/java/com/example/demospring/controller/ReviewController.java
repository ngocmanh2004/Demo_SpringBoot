package com.example.demospring.controller;

import com.example.demospring.model.Review;
import com.example.demospring.service.ReviewService;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;
import java.time.LocalDateTime;
import java.util.List;

@CrossOrigin(origins = "http://localhost:4200")
@RestController
@RequestMapping("/api/reviews")
public class ReviewController {
    private final ReviewService service;

    public ReviewController(ReviewService service) {
        this.service = service;
    }

    @GetMapping
    public List<Review> getAll() { return service.getAll(); }

    @GetMapping("/room/{roomId}")
    public List<Review> getByRoomId(@PathVariable Integer roomId) {
        return service.getByRoomId(roomId);
    }

    @PostMapping
    public Review create(@RequestBody Review review) {
        review.setCreatedAt(LocalDateTime.now());
        return service.save(review);
    }

    @PutMapping("/{id}")
    public ResponseEntity<Review> update(@PathVariable Integer id, @RequestBody Review review) {
        review.setId(id);
        return ResponseEntity.ok(service.save(review));
    }

    @DeleteMapping("/{id}")
    public ResponseEntity<Void> delete(@PathVariable Integer id) {
        service.delete(id);
        return ResponseEntity.noContent().build();
    }
}
