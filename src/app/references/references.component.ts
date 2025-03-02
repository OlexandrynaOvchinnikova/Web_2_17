import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-references',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './references.component.html',
  styleUrl: './references.component.css'
})
export class ReferencesComponent {
  isExpanded = true;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
