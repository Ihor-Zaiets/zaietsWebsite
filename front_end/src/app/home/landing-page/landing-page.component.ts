import { Component } from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-landing-page',
  standalone: true,
  imports: [],
  templateUrl: './landing-page.component.html',
  styleUrl: './landing-page.component.scss'
})
export class LandingPageComponent {
  constructor(private translationService: TranslationService) {}

  pageKey: string = 'landing_page'
  getTranslation(key: string) {
    return this.translationService.getTranslationForKey(this.pageKey + '.' + key);
  }
}
