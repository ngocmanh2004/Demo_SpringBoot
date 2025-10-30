import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:8081/api/users';

  constructor(private http: HttpClient) {}

  // ✅ Login
  login(credentials: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/login`, credentials);
  }

  // ✅ Register
  register(user: any): Observable<any> {
    return this.http.post(this.apiUrl, user);
  }

  getLoggedInUser(): any {
    return JSON.parse(localStorage.getItem('user') || 'null');
  }

  logout(): void {
    localStorage.removeItem('user');
  }
}
