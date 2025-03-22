import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../auth/auth.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: AuthService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean> | Promise<boolean> | boolean {

    // Якщо користувач авторизований, дозволяємо доступ
    if (this.authService.isAuthenticated()) {
      return true;
    } else {
      // Якщо не авторизований, переадресовуємо на сторінку входу
      this.router.navigate(['login']);
      return false;
    }
  }
}
