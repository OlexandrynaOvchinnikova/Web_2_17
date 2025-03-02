import { Component } from '@angular/core';


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
import { HttpClientModule } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  standalone: true,
  imports: [
    HttpClientModule,
    HeaderComponent,
    AboutComponent,
    ContactComponent,
    WorkExperienceComponent,
    EducationComponent,
    ReferencesComponent,
    AwardsComponent,
    SkillsComponent,
    LanguageComponent,
    FooterComponent
  ]
})
export class AppComponent {
  title = 'cv-app';
}

