import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {
  private apiUrl = 'http://localhost:8080/api/users';

  constructor(private http: HttpClient) {}

  getAll(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

  create(user: any): Observable<any> {
    return this.http.post<any>(this.apiUrl, user);
  }

  update(idOrUser: any, user?: any): Observable<any> {
    if (typeof idOrUser === 'object') {
      return this.http.put<any>(`${this.apiUrl}/${idOrUser.id}`, idOrUser);
    }
    return this.http.put<any>(`${this.apiUrl}/${idOrUser}`, user);
  }

  delete(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
