import { Component } from '@angular/core';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    CommonModule,
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.css'
})
export class SkillsComponent {
  isExpanded = true;

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }

  updateSlider(event: Event) {
    const input = event.target as HTMLInputElement;
    input.style.background = this.getSliderBackground(Number(input.value));
  }

  getSliderBackground(value: number): string {
    const percentage = (value / 1000) * 100;
    return `linear-gradient(to right, #f97316 ${percentage}%, #e5e7eb ${percentage}%)`;
  }

}
