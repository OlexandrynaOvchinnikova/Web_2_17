import { Routes } from '@angular/router';
import { CvComponent } from './cv/cv.component';
import {RegistrationFormComponent} from './registration-form/registration-form.component';
import {LoginComponent} from './login/login.component';
import {AuthGuard} from './guards/auth.guard';

export const routes: Routes = [
  {path: 'main', component: CvComponent, canActivate: [AuthGuard] },
  {path: 'registration', component: RegistrationFormComponent},
  {path: 'login', component: LoginComponent},
  { path: '', redirectTo: '/login', pathMatch: 'full' },
];
