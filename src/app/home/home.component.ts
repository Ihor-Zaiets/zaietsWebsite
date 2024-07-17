import { Component } from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ButtonType} from "../shared/button/button.component";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    SharedModule,
    AboutMeComponent,
    ContactComponent,
    ExperienceComponent,
    SkillsComponent,
    LandingPageComponent
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

    protected readonly ButtonType = ButtonType;
}
