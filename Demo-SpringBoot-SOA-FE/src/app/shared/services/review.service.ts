import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
  id?: number;
  userId: number;
  roomId: number;
  rating: number;
  comment: string;
  username?: string;
  createdAt?: string;
}

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8080/api/reviews';
  private userUrl = 'http://localhost:8080/api/users';
  private roomUrl = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getReviewById(id: number): Observable<Review> {
    return this.http.get<Review>(`${this.apiUrl}/${id}`);
  }

  createReview(review: Review): Observable<Review> {
    return this.http.post<Review>(this.apiUrl, review);
  }

  updateReview(id: number, review: Review): Observable<Review> {
    return this.http.put<Review>(`${this.apiUrl}/${id}`, review);
  }

  deleteReview(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>(this.userUrl);
  }

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>(this.roomUrl);
  }
}
