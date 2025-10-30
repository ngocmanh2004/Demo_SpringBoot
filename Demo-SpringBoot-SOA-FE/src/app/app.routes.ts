import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserFormComponent } from './features/user-form/user-form.component';
import { RoomsComponent } from './features/rooms/rooms.component';
import { RoomFormComponent } from './features/room-form/room-form.component';
import { ReviewsComponent } from './features/reviews/reviews.component';
import { LoginComponent } from './features/login/login.component';
import { RegisterComponent } from './features/register/register.component';
import { AppComponent } from './app.component';


export const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' },
  { path: 'home', component:AppComponent }, 
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },

  { path: 'rooms', component: RoomsComponent },
  { path: 'rooms/add', component: RoomFormComponent },
  { path: 'rooms/edit/:id', component: RoomFormComponent },

  { path: 'login', component: LoginComponent },
  { path: 'register', component: RegisterComponent },
  // các route khác
  { path: 'reviews', component: ReviewsComponent }
];
