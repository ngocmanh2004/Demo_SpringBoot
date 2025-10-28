import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-users',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users: any[] = [];

  constructor(
    private service: UserService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.load();
  }

  load() {
    this.service.getAll().subscribe(data => this.users = data);
  }

  addUser() {
    this.router.navigate(['/users/add']);
  }

  editUser(id: number) {
    this.router.navigate(['/users/edit', id]);
  }

  deleteUser(id: number) {
    if (confirm('Bạn có chắc muốn xóa user này không?')) {
      this.service.delete(id).subscribe(() => this.load());
    }
  }

  goBack() {
    this.router.navigateByUrl('/');
  }
}
