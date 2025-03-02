import { Component } from '@angular/core';
import {CommonModule, NgOptimizedImage} from '@angular/common';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

@Component({
  selector: 'app-about',
  standalone: true,
  templateUrl: './about.component.html',
  imports: [
    NgOptimizedImage,
    CommonModule,
    FontAwesomeModule,
  ],
  styleUrls: ['./about.component.css']
})
export class AboutComponent {
  framePath: string = "images/frame.jpg";
  imgPath: string = "images/mainPhoto.jpg";
}


