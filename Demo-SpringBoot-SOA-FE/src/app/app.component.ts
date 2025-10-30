import { Component, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [CommonModule, RouterModule],
})
export class AppComponent {
  router = inject(Router);

  isHomePage(): boolean {
    return this.router.url === '/' || this.router.url === '/home';
  }
}
