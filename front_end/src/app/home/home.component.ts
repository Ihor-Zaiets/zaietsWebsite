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
    burgerMainMenu: string = 'mainManu';
    burgerLanguageMenu: string = 'languageMenu';
    burgerMenuToShow: string | null;
    pageKey: string = 'home';

    constructor(private translationService: TranslationService) {}
    ngOnInit() {
      this.trackPageScrollOnFooter();
      this.translationService.getAllLanguages().subscribe(languages => this.languages = languages);
    }

    getTranslationForComponent(key: string): string {
      return this.translationService.getTranslationForKey(this.pageKey + '.' + key);
    }

    getGeneralTranslation(key: string): string {
      return this.translationService.getTranslationForKey(key);
    }

    downloadCV() {
      const fileName = 'Ihor Zaiets CV developer fullstack.pdf'
      const fileUrl = "assets/files/" + fileName;
      const downloadLink = document.createElement('a');
      downloadLink.href = fileUrl;
      downloadLink.download = fileName;
      downloadLink.click();
    }

    showBurgerMenu() {
      if (this.burgerMenuToShow == this.burgerMainMenu)
        this.burgerMenuToShow = null;
      else
        this.burgerMenuToShow = this.burgerMainMenu;
    }

    showLanguageMenu() {
      this.burgerMenuToShow = this.burgerLanguageMenu;
    }

    selectLanguage(languageCode: string) {
      this.translationService.getAllTranslationsForLanguage(languageCode);
      console.log("language: " + languageCode);
      this.burgerMenuToShow = this.burgerMainMenu;
    }

  private trackPageScrollOnFooter() {
    document.addEventListener('DOMContentLoaded', () => {
      const buttons = document.querySelectorAll('button.footer-btn') as NodeListOf<HTMLElement>;
      const sections = document.querySelectorAll('#app-landing-page, section') as NodeListOf<HTMLElement>;

      const checkSections = () => {
        let index = 0;
        while (index < sections.length) {
          if (this.isElementInViewportAndAboveFooter(sections[index])) {
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

  isElementInViewportAndAboveFooter = function(el: Element) {
      const rect = el.getBoundingClientRect();
      const windowHeight = (window.innerHeight || document.documentElement.clientHeight);
      const footer = document.querySelector("footer");
      return rect.top - windowHeight + footer!.offsetHeight <= 0
  }
}
