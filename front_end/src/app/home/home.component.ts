import {Component, OnInit} from '@angular/core';
import { SharedModule } from '../shared/shared.module';
import {AboutMeComponent} from "./about-me/about-me.component";
import {ContactComponent} from "./contact/contact.component";
import {ExperienceComponent} from "./experience/experience.component";
import {SkillsComponent} from "./skills/skills.component";
import {LandingPageComponent} from "./landing-page/landing-page.component";
import {ButtonType} from "../shared/button/button.component";
import {CommonModule} from "@angular/common";
import {TranslationService} from "../services/translation.service";
import {Language} from "../entities/Language";

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [
    CommonModule,
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
    languages: Language[];
    showLanguageMenu: boolean = false;

    constructor(private translationService: TranslationService) {}
    ngOnInit() {
      this.trackPageScrollOnFooter();
      this.languages = this.translationService.getAllLanguages();
    }

    toggleLanguageMenu() {
      this.showLanguageMenu = !this.showLanguageMenu;
    }

    selectLanguage(languageCode: string) {
      this.translationService.getAllTranslationsForLanguage(languageCode);
      console.log("language: " + languageCode);
      this.showLanguageMenu = false;
    }

  private trackPageScrollOnFooter() {
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('button.footer-btn') as NodeListOf<HTMLElement>;
      const sections = document.querySelectorAll('#app-landing-page, section') as NodeListOf<HTMLElement>;

      const checkSections = () => {
        let index = 0;
        while (index < sections.length) {
          if (this.isElementXPixelsInViewport(sections[index], 150)) {
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
