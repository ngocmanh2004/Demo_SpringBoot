package com.example.user_service.service;

import com.example.user_service.entity.User;
import com.example.user_service.repository.UserRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class UserService {

    private final UserRepository repository;

    public UserService(UserRepository repository) {
        this.repository = repository;
    }

    public List<User> getAll() {
        return repository.findAll();
    }

    public User getById(Long id) {
        return repository.findById(id).orElse(null);
    }

    public User create(User user) {
        return repository.save(user);
    }

    public User update(Long id, User user) {
        Optional<User> existing = repository.findById(id);
        if (existing.isPresent()) {
            user.setId(id);
            return repository.save(user);
        }
        return null;
    }

    public void delete(Long id) {
        repository.deleteById(id);
    }

    // ✅ Thêm hàm login support
    public User findByUsername(String username) {
        return repository.findByUsername(username).orElse(null);
    }
}
