import { Component } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';


import { HeaderComponent } from './header/header.component';
import { AboutComponent } from './about/about.component';
import { ContactComponent } from './contact/contact.component';
import { WorkExperienceComponent } from './work-experience/work-experience.component';
import { EducationComponent } from './education/education.component';
import { ReferencesComponent } from './references/references.component';
import { AwardsComponent } from './awards/awards.component';
import { SkillsComponent } from './skills/skills.component';
import { LanguageComponent } from './language/language.component';
import { FooterComponent } from './footer/footer.component';
import { RegistrationFormComponent } from './registration-form/registration-form.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    ReactiveFormsModule,
    FormsModule,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    AwardsComponent,
    SkillsComponent,
    LanguageComponent,
    FooterComponent,
    RegistrationFormComponent,
  ]
})
export class AppComponent {
  title = 'cv-app';
}
