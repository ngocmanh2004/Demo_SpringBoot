import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserFormComponent } from './features/user-form/user-form.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { RoomFormComponent } from './features/room-form/room-form.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { AppComponent } from './app.component';

export const routes: Routes = [
  { path: '', component: AppComponent }, // 👈 Trang mặc định nếu cần
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomFormComponent },
  { path: 'rooms/edit/:id', component: RoomFormComponent },
  { path: 'reviews', component: ReviewsComponent }
];
