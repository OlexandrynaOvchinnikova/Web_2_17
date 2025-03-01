// src/app/app.component.ts
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { provideRouter, Routes } from '@angular/router';


// const routes: Routes = [
//   { path: '', component: HomeComponent },
//   // Додаткові маршрути
// ];

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  imports: [RouterOutlet]
})
export class AppComponent {
  title = 'cv-app';
}
