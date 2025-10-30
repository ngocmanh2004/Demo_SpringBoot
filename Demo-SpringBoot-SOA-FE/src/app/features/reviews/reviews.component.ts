import { Component, OnInit } from '@angular/core';
import { CommonModule, NgFor, NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ReviewService } from '../../shared/services/review.service';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-reviews',
  standalone: true,
  imports: [CommonModule, FormsModule, NgFor, NgIf],
  templateUrl: './reviews.component.html',
  styleUrls: ['./reviews.component.css']
})
export class ReviewsComponent implements OnInit {
  reviews: any[] = [];
  newComment = '';
  currentUser: any;

  constructor(private service: ReviewService, private auth: AuthService) {}

  ngOnInit(): void {
    this.currentUser = this.auth.getLoggedInUser();
    this.loadReviews();
  }

  loadReviews() {
    this.service.getAll().subscribe({
      next: (data) => (this.reviews = data),
      error: () => alert('Không thể tải danh sách đánh giá!')
    });
  }

  addReview() {
    if (!this.currentUser) {
      alert('Bạn phải đăng nhập mới có thể đánh giá!');
      return;
    }

    const review = {
      userId: this.currentUser.id,
      roomId: 1, // hoặc lấy từ route/biến context nếu có
      rating: 5,
      comment: this.newComment,
      createdAt: new Date()
    };

    this.service.create(review).subscribe({
      next: () => {
        this.newComment = '';
        this.loadReviews();
      },
      error: () => alert('Lỗi khi gửi đánh giá!')
    });
  }
}
