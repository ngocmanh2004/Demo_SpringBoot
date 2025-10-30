import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface Review {
  id?: number;
  roomId: number;
  userId: number;         
  rating: number;
  comment: string;
  createdAt?: string;
  username?: string;
}

@Injectable({ providedIn: 'root' })
export class ReviewService {
  private apiUrl = 'http://localhost:8083/api/reviews';

  constructor(private http: HttpClient) {}

  getAllReviews(): Observable<Review[]> {
    return this.http.get<Review[]>(this.apiUrl);
  }

  getAllUsers(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8081/api/users');  
  }

  getAllRooms(): Observable<any[]> {
    return this.http.get<any[]>('http://localhost:8082/api/rooms');  
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
}
