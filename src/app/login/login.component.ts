import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth/auth.service';
import {FormsModule} from '@angular/forms';
import {NgIf} from '@angular/common';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  imports: [
    FormsModule,
    NgIf
  ],
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  email: string = '';
  password: string = '';
  errorMessage: string = '';

  constructor(private authService: AuthService, private router: Router) {}

  login() {
    if (this.email && this.password) {
      this.authService.login(this.email, this.password).subscribe({
        next: (response) => {
          // Зберігаємо токен у localStorage
          this.authService.saveToken(response.token);
          this.router.navigate(['/main']); // Перенаправляємо на головну сторінку
        },
        error: (err) => {
          this.errorMessage = 'Невірні дані для входу';
        }
      });
    } else {
      this.errorMessage = 'Заповніть всі поля';
    }
  }
}
