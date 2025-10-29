package com.example.room_service.service;

import com.example.room_service.model.Room;
import java.util.List;
import java.util.Optional;

public interface RoomService {
    List<Room> getAllRooms();
    Optional<Room> getRoomById(Integer id);
    Room createRoom(Room room);
    Room updateRoom(Integer id, Room room);
    void deleteRoom(Integer id);
}
