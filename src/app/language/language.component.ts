import { Component } from '@angular/core';
import {NgIf} from '@angular/common';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-language',
  standalone: true,
  templateUrl: './language.component.html',
  imports: [
    NgIf,
    CommonModule,
  ],
  styleUrl: './language.component.css'
})
export class LanguageComponent {
  isExpanded = true;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
  languages = [
    { name: 'Spanish & French', percentage: 65, color: '#fe4a01', },
    { name: 'German & Japanese', percentage: 70, color: '#fe4a01' },
    { name: 'English & Portuguese', percentage: 85, color: '#fe4a01' },
    { name: 'Persian & Quechua', percentage: 68, color: '#fe4a01' }
  ];

}
