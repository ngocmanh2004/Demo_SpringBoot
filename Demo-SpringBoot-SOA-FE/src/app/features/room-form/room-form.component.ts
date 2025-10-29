import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RoomService } from '../../shared/services/room.service';

@Component({
  selector: 'app-room-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
   providers: [RoomService], 
  templateUrl: './room-form.component.html',
  styleUrls: ['./room-form.component.css']
})
export class RoomFormComponent implements OnInit {
  room: any = {
    buildingId: '',
    name: '',
    price: 0,
    area: 0,
    status: 'AVAILABLE',
    description: '',
    createdAt: new Date()
  };

  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: RoomService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.getById(+id).subscribe(data => this.room = data);
    }
  }

  saveRoom() {
    if (this.isEdit) {
      this.service.update(this.room).subscribe(() => {
        alert('Cập nhật phòng thành công!');
        this.router.navigate(['/rooms']);
      });
    } else {
      this.service.create(this.room).subscribe(() => {
        alert('Thêm phòng thành công!');
        this.router.navigate(['/rooms']);
      });
    }
  }

  cancel() {
    this.router.navigate(['/rooms']);
  }
}
