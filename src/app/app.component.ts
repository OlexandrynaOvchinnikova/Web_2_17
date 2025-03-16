import { Component } from '@angular/core';
import { RouterModule, RouterOutlet } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { HttpClientModule } from '@angular/common/http';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,  // Використовуємо standalone компоненти
  imports: [
    RouterOutlet,
    RouterModule,
    HttpClientModule
  ],
  providers: [AuthGuard],
})
export class AppComponent {
  title = 'cv-app';
}
