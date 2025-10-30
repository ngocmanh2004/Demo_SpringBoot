import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class RoomService {
  private apiUrl = 'http://localhost:8080/api/rooms';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(room: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, room);
  }

  update(idOrRoom: any, room?: any): Observable<any> {
    if (typeof idOrRoom === 'object') {
      return this.http.put<any>(`${this.apiUrl}/${idOrRoom.id}`, idOrRoom);
    }
    return this.http.put<any>(`${this.apiUrl}/${idOrRoom}`, room);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
