import { Component } from '@angular/core';
import { SharedModule } from '../../shared/shared.module';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-about-me',
  standalone: true,
  imports: [
    SharedModule,
  ],
  templateUrl: './about-me.component.html',
  styleUrl: './about-me.component.scss'
})
export class AboutMeComponent {
  pageKey: string = 'about_me'

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.getTranslationForKey(this.pageKey + '.' + key);
  }
}
