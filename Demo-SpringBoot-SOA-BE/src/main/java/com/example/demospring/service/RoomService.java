package com.example.demospring.service;

import com.example.demospring.model.Room;
import com.example.demospring.repository.RoomRepository;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomService {

    private final RoomRepository repo;

    public RoomService(RoomRepository repo) {
        this.repo = repo;
    }

    public List<Room> getAll() {
        return repo.findAll();
    }

    public Optional<Room> getById(Long id) {
        return repo.findById(id);
    }

    public Room save(Room room) {
        return repo.save(room);
    }

    public void delete(Long id) {
        repo.deleteById(id);
    }
}
