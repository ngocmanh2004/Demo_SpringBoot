import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UserService } from '../../shared/services/user.service';

@Component({
  selector: 'app-user-form',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './user-form.component.html',
  styleUrls: ['./user-form.component.css']
})
export class UserFormComponent implements OnInit {
  user: any = {
  username: '',
  fullName: '',
  email: '',
  phone: '',
  password: '',  
  roleId: 3
};


  isEdit = false;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: UserService
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');
    if (id) {
      this.isEdit = true;
      this.service.getById(+id).subscribe(data => this.user = data);
    }
  }

saveUser() {
  console.log('🟢 saveUser() called:', this.user);

  if (this.isEdit) {
    this.service.update(this.user).subscribe(() => {
      alert('Cập nhật người dùng thành công!');
      this.router.navigate(['/users']);
    });
  } else {
    this.service.create(this.user).subscribe(() => {
      alert('Thêm người dùng thành công!');
      this.router.navigate(['/users']);
    });
  }
}


  cancel() {
    this.router.navigate(['/users']);
  }
}
