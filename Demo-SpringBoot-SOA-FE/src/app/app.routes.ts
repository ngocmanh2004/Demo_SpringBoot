import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserFormComponent } from './features/user-form/user-form.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { RoomFormComponent } from './features/room-form/room-form.component';
import { ReviewsComponent } from './features/reviews/reviews.component';

export const routes: Routes = [
  { path: '', redirectTo: 'users', pathMatch: 'full' }, // ✅ Trang mặc định
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },

  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomFormComponent },
  { path: 'rooms/edit/:id', component: RoomFormComponent },

  { path: 'reviews', component: ReviewsComponent },

  { path: '**', redirectTo: 'users' } // ✅ nếu route không hợp lệ, quay lại Users
];
