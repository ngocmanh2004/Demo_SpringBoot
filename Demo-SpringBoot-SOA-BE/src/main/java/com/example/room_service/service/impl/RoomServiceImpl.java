package com.example.room_service.service.impl;

import com.example.room_service.model.Room;
import com.example.room_service.repository.RoomRepository;
import com.example.room_service.service.RoomService;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class RoomServiceImpl implements RoomService {

    private final RoomRepository roomRepository;

    public RoomServiceImpl(RoomRepository roomRepository) {
        this.roomRepository = roomRepository;
    }

    @Override
    public List<Room> getAllRooms() {
        return roomRepository.findAll();
    }

    @Override
    public Optional<Room> getRoomById(Integer id) {
        return roomRepository.findById(id);
    }

    @Override
    public Room createRoom(Room room) {
        return roomRepository.save(room);
    }

    @Override
    public Room updateRoom(Integer id, Room roomDetails) {
        Room room = roomRepository.findById(id)
                .orElseThrow(() -> new RuntimeException("Room not found"));

        room.setName(roomDetails.getName());
        room.setBuildingId(roomDetails.getBuildingId());
        room.setPrice(roomDetails.getPrice());
        room.setArea(roomDetails.getArea());
        room.setStatus(roomDetails.getStatus());
        room.setDescription(roomDetails.getDescription());

        return roomRepository.save(room);
    }

    @Override
    public void deleteRoom(Integer id) {
        roomRepository.deleteById(id);
    }
}
