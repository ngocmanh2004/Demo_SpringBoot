package com.example.user_service.service;

import com.example.user_service.entity.User;
import com.example.user_service.repository.UserRepository;
import org.springframework.stereotype.Service;
import java.util.List;

@Service
public class UserService {
    private final UserRepository repo;

    public UserService(UserRepository repo) {
        this.repo = repo;
    }

    public List<User> getAll() {
        return repo.findAll();
    }

    public User getById(Long id) {
        return repo.findById(id).orElse(null);
    }

    public User create(User user) {
        return repo.save(user);
    }

    public User update(Long id, User newData) {
        User u = repo.findById(id).orElse(null);
        if (u != null) {
            u.setFullName(newData.getFullName());
            u.setEmail(newData.getEmail());
            u.setPhone(newData.getPhone());
            return repo.save(u);
        }
        return null;
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
