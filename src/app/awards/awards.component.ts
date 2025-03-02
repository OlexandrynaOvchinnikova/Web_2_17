import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/data.service';
import {NgForOf, NgIf} from '@angular/common';
import {CommonModule} from '@angular/common';

@Component({
  selector: 'app-awards',
  standalone: true,
  imports: [
    CommonModule,
    NgIf,
    NgForOf
  ],
  templateUrl: './awards.component.html',
  styleUrl: './awards.component.css'
})
export class AwardsComponent implements OnInit{
  awards: any[] = [];
  isExpanded = true;

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getWorkExperience().subscribe(
      (data) => {
        this.awards = data.awards;
      },
      (error) => {
        console.error('Error fetching data:', error);
      }
    );
  }

  toggleContent() {
    this.isExpanded = !this.isExpanded;
  }
}
