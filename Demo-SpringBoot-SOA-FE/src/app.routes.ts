import { Routes } from '@angular/router';
import { UsersComponent } from './app/features/users/users.component';
import { UserFormComponent } from './app/features/user-form/user-form.component';
import { RoomsComponent } from './app/features/rooms/rooms.component';
import { RoomFormComponent } from './app/features/room-form/room-form.component';
import { ReviewsComponent } from './app/features/reviews/reviews.component';

export const routes: Routes = [
  { path: '', component: ReviewsComponent }, // 👈 Trang mặc định nếu cần
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomFormComponent },
  { path: 'rooms/edit/:id', component: RoomFormComponent },
  { path: 'reviews', component: ReviewsComponent }
];
