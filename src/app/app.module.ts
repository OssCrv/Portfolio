import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { GreetingComponent } from './components/greeting/greeting.component';
import { SkillsComponent } from './components/skills/skills.component';
import { SoftwareSkillComponent } from "./components/skills/software-skill/software-skill.component";
import { SocialMediaComponent } from './components/social-media/social-media.component';
import { EducationComponent } from './components/education/education.component';
import { ExperienceComponent } from './components/experience/experience.component';
import { ExperienceCardComponent } from './components/experience/experience-card/experience-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GreetingComponent,
    SkillsComponent,
    SoftwareSkillComponent,
    SocialMediaComponent,
    EducationComponent,
    ExperienceComponent,
    ExperienceCardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
