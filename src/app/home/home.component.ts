import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {ProjectsComponent} from "./projects/projects.component";
import {SkillsComponent} from "./skills/skills.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    AboutMeComponent,
    ContactComponent,
    ProjectsComponent,
    SkillsComponent,
    LandingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

}
