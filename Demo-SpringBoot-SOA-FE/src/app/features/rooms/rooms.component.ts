import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterLink } from '@angular/router';
import { NgFor } from '@angular/common';
import { RoomService } from '../../shared/services/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, NgFor],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];

  constructor(
    private service: RoomService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }
loadRooms() {
  this.service.getAll().subscribe({
    next: (data) => {
      console.log('Rooms loaded:', data);
      this.rooms = data;
    },
    error: (err) => {
      console.error('❌ Lỗi API:', err);
      alert('Không thể tải danh sách phòng!');
    }
  });
}

  addRoom() {
    this.router.navigate(['/rooms/add']);
  }

  editRoom(id: number) {
    this.router.navigate(['/rooms/edit', id]);
  }

  deleteRoom(id: number) {
    if (confirm('Bạn có chắc muốn xóa phòng này không?')) {
      this.service.delete(id).subscribe({
        next: () => {
          alert('Xóa thành công!');
          this.loadRooms();
        },
        error: (err) => {
          console.error('Lỗi khi xóa phòng:', err);
          alert('Không thể xóa phòng!');
        }
      });
    }
  }
}
