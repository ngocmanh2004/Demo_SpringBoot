import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms'; // ✅ Thêm dòng này
import { Router } from '@angular/router';
import { AuthService } from '../../shared/services/auth.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [CommonModule, FormsModule], // ✅ Thêm FormsModule vào đây
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  credentials = { username: '', password: '' };

  constructor(private auth: AuthService, private router: Router) {}

  login() {
    this.auth.login(this.credentials).subscribe({
      next: (user) => {
        alert('Đăng nhập thành công!');
        localStorage.setItem('user', JSON.stringify(user));
        this.router.navigate(['/home']);
      },
      error: () => alert('Sai tên đăng nhập hoặc mật khẩu!')
    });
  }
}
