import { Routes } from '@angular/router';
import { UsersComponent } from './features/users/users.component';
import { UserFormComponent } from './features/user-form/user-form.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: '/' },
  { path: 'users', component: UsersComponent },
  { path: 'users/add', component: UserFormComponent },
  { path: 'users/edit/:id', component: UserFormComponent },
  { path: 'rooms', loadComponent: () => import('./features/rooms/rooms.component').then(m => m.RoomsComponent) },
  { path: 'reviews', loadComponent: () => import('./features/reviews/reviews.component').then(m => m.ReviewsComponent) },
];
