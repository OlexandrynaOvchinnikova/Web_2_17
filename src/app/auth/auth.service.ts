import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private apiUrl = 'http://localhost:3000/login'; // URL сервера для логіну

  constructor(private http: HttpClient) {}

  // Метод для логіну
  login(email: string, password: string): Observable<any> {
    const credentials = { email, password };
    return this.http.post<any>(this.apiUrl, credentials);
  }

  // Перевірка автентифікації
  isAuthenticated(): boolean {
    if (typeof window !== 'undefined') {
      const token = localStorage.getItem('authToken');
      return !!token;
    }
    return false;
  }

  // Зберігаємо токен
  saveToken(token: string): void {
    if (typeof window !== 'undefined') {
      localStorage.setItem('authToken', token);
    }
  }

  // Логаут
  logout(): void {
    if (typeof window !== 'undefined') {
      localStorage.removeItem('authToken');
    }
  }
}

