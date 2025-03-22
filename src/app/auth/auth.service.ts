import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { catchError } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login';  // URL для реального сервера
  private users = [
    { name: "Princess_Peach8", email: "alexandrinaovchinnikova@gmail.com", password: "1234567890" },
    { name: "Princess_Peach8", email: "alexandrinaovchinnikova@gmail.com", password: "123456789034" },
    { name: "Princess_Peach90", email: "alexandrinaovchinnikova@gmail.com", password: "12345678" },
    // Додай всі інші користувацькі дані з файлу
  ];

  constructor(private http: HttpClient) {}

  // Метод для перевірки, чи є токен
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      // Перевірка наявності токена в sessionStorage або localStorage
      const token = sessionStorage.getItem('authToken'); // або localStorage
      return !!token;
    }
    return false;
  }

  login(email: string, password: string): Observable<any> {
    // Перевірка введених даних з масиву користувачів
    const user = this.users.find(u => u.email === email && u.password === password);

    if (user) {
      // Імітація успішного входу та повернення токену
      return of({ token: 'fake-jwt-token' });
    } else {
      // Якщо користувача немає, повертаємо помилку
      return of(null).pipe(catchError(() => { throw new Error('Invalid credentials'); }));
    }
  }

  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      sessionStorage.setItem('authToken', token); // або localStorage
    }
  }
}
