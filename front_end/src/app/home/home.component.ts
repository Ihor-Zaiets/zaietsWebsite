import {Component, OnInit} from '@angular/core';
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
export class HomeComponent implements OnInit {
    protected readonly ButtonType = ButtonType;

    ngOnInit() {
      this.trackPageScrollOnFooter();
    }

  private trackPageScrollOnFooter() {
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('button.footer-btn') as NodeListOf<HTMLElement>;
      const sections = document.querySelectorAll('#app-landing-page, section') as NodeListOf<HTMLElement>;

      console.log(sections)
      console.log(buttons)
      console.log(sections[0].localName + '[' + 0 + '] offsetTop: ' + (sections[0].offsetTop + 150))
      console.log(sections[1].localName + '[' + 1 + '] offsetTop: ' + (sections[1].offsetTop + 150))
      console.log(sections[2].localName + '[' + 2 + '] offsetTop: ' + (sections[2].offsetTop + 150))
      console.log(sections[3].localName + '[' + 3 + '] offsetTop: ' + (sections[3].offsetTop + 150))
      console.log(sections[4].localName + '[' + 4 + '] offsetTop: ' + (sections[4].offsetTop + 150))
      const checkSections = () => {
        let index = 0;
        while (index < sections.length) {
          if (this.isElementXPixelsInViewport(sections[index], 150)) {
            console.log('Change button color.')
            console.log('window.scrollY: ' + window.scrollY)
            buttons.forEach((button) => button.classList.remove('active'));
            buttons[index].classList.add('active');
          }
          index++;
        }
      };

      window.addEventListener('scroll', checkSections);

      buttons.forEach(button => {
        button.addEventListener('click', () => {
          document.getElementById(button.parentElement!.dataset.section as string)!.scrollIntoView({
            behavior: 'smooth'
          });
        });
      });

      checkSections();
    });
  }

  isElementXPixelsInViewport = function(el: Element, pixelsVisible:number) {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);

    return !(
      Math.floor(rect.height - ((rect.top >= 0) ? 0 : rect.top)) < pixelsVisible ||
      Math.floor(rect.height - (rect.bottom - windowHeight)) < pixelsVisible
    )
  }
}
