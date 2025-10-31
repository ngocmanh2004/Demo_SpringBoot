import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router';
import { Location } from '@angular/common';
import { ReviewService, Review } from '../../shared/services/review.service';
import { forkJoin } from 'rxjs';

@Component({
  selector: 'app-reviews',
  standalone: true,
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css'],
  imports: [CommonModule, FormsModule, RouterModule]
})
export class ReviewsComponent implements OnInit {
  private reviewApi = inject(ReviewService);
  private location = inject(Location);

  reviews: Review[] = [];
  users: any[] = [];
  rooms: any[] = [];

  selectedUserId: number | null = null;
  selectedRoomId: number | null = null;
  rating = 5;
  comment = '';
  editingReviewId: number | null = null;

  ngOnInit(): void {
    this.loadData();
  }

  loadData() {
  forkJoin({
    users: this.reviewApi.getAllUsers(),
    rooms: this.reviewApi.getAllRooms(),
    reviews: this.reviewApi.getAllReviews()
  }).subscribe(({ users, rooms, reviews }) => {
    this.users = users;
    this.rooms = rooms;

    this.reviews = reviews.map(r => ({
      ...r,
      username: users.find(u => u.id === r.userId)?.username || `#${r.userId}`,
      roomName: rooms.find(room => room.id === r.roomId)?.name || `#${r.roomId}`
    }));
  });
}

  goBack() { this.location.back(); }  

  submitReview() {
    const userId = this.selectedUserId != null ? Number(this.selectedUserId) : null;
    const roomId = this.selectedRoomId != null ? Number(this.selectedRoomId) : null;

    if (!userId || !roomId || !this.comment.trim()) {
      alert('Vui lòng chọn người dùng, phòng và nhập nội dung đánh giá.');
      return;
    }

    const payload: Review = {
      userId,                 // 👈 GỬI userId đúng chuẩn
      roomId,
      rating: Number(this.rating),
      comment: this.comment.trim()
    };

    const call$ = this.editingReviewId
      ? this.reviewApi.updateReview(this.editingReviewId, payload)
      : this.reviewApi.createReview(payload);

    call$.subscribe({
      next: () => {
        this.resetForm();
        this.loadData();
      },
      error: (e) => {
        console.error(e);
        alert('Gửi/cập nhật đánh giá thất bại. Kiểm tra backend.');
      }
    });
  }

  editReview(r: Review) {
    this.editingReviewId = r.id!;
    this.selectedUserId = r.userId;
    this.selectedRoomId = r.roomId;
    this.rating = r.rating;
    this.comment = r.comment;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }

  deleteReview(id: number) {
    if (!confirm('Xóa đánh giá này?')) return;
    this.reviewApi.deleteReview(id).subscribe({
      next: () => this.loadData(),
      error: (e) => { console.error(e); alert('Xóa thất bại.'); }
    });
  }

  resetForm() {
    this.editingReviewId = null;
    this.selectedUserId = null;
    this.selectedRoomId = null;
    this.rating = 5;
    this.comment = '';
  }
}
