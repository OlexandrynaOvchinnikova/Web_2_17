import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent {
  isExpanded = true;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
