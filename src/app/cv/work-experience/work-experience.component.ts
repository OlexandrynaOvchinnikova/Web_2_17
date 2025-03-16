// import { Component } from '@angular/core';
// import { NgModule } from '@angular/core';
// import { CommonModule } from '@angular/common';
//
// @Component({
//   selector: 'app-work-experience',
//   standalone: true,
//   imports: [
//     CommonModule,
//   ],
//   templateUrl: './work-experience.component.html',
//   styleUrl: './work-experience.component.css'
// })
// export class WorkExperienceComponent {
//   isExpanded = true;
//
//   toggleContent() {
//     this.isExpanded = !this.isExpanded;
//   }
// }

import { Component, OnInit } from '@angular/core';
import { FileService } from '../services/data.service';
import {NgForOf, NgIf} from '@angular/common';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  standalone: true,
  imports: [
    NgIf,
    NgForOf
  ],
  styleUrls: ['./work-experience.component.css']
})
export class WorkExperienceComponent implements OnInit {
  workExperience: any[] = [];
  isExpanded = true;

  constructor(private fileService: FileService) {}

  ngOnInit() {
    this.fileService.getWorkExperience().subscribe(
      (data) => {
        this.workExperience = data.jobs;
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


