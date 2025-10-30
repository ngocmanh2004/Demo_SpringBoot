import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReviewService {
  private apiUrl = 'http://localhost:8083/api/reviews'; // backend review-service

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  getByRoomId(roomId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.apiUrl}/room/${roomId}`);
  }

  create(review: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, review);
  }

  update(id: number, review: any): Observable<any> {
    return this.http.put<any>(`${this.apiUrl}/${id}`, review);
  }

  delete(id: number): Observable<any> {
    return this.http.delete<any>(`${this.apiUrl}/${id}`);
  }
}
