package com.example.demospring.service;

import com.example.demospring.model.Review;
import com.example.demospring.repository.ReviewRepository;
import org.springframework.stereotype.Service;
import java.util.List;
import java.util.Optional;

@Service
public class ReviewService {
    private final ReviewRepository repo;

    public ReviewService(ReviewRepository repo) {
        this.repo = repo;
    }

    public List<Review> getAll() { return repo.findAll(); }

    public List<Review> getByRoomId(Integer roomId) { return repo.findByRoomId(roomId); }

    public Optional<Review> getById(Integer id) { return repo.findById(id); }

    public Review save(Review review) { return repo.save(review); }

    public void delete(Integer id) { repo.deleteById(id); }
}
