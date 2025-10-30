import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { NgFor, NgIf } from '@angular/common';
import { RoomService } from '../../shared/services/room.service';

@Component({
  selector: 'app-rooms',
  standalone: true,
  imports: [CommonModule, NgFor, NgIf],
  templateUrl: './rooms.component.html',
  styleUrls: ['./rooms.component.css']
})
export class RoomsComponent implements OnInit {
  rooms: any[] = [];
  isLoading = false;

  constructor(
    private service: RoomService,
    public router: Router
  ) {}

  ngOnInit(): void {
    this.loadRooms();
  }

  goBack() {
    this.router.navigate(['/']);
  }

  loadRooms() {
    this.isLoading = true;
    this.service.getAll().subscribe({
      next: (data) => {
        console.log('✅ Rooms loaded:', data);
        this.rooms = data;
        this.isLoading = false;
      },
      error: (err) => {
        console.error('❌ Lỗi API:', err);
        alert('Không thể tải danh sách phòng!');
        this.isLoading = false;
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
          console.error('⚠️ Lỗi khi xóa phòng:', err);
          alert('Không thể xóa phòng!');
        }
      });
    }
  }
}
