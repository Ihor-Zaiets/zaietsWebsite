import { Component } from '@angular/core';
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-contact',
  standalone: true,
  imports: [],
  templateUrl: './contact.component.html',
  styleUrl: './contact.component.scss'
})
export class ContactComponent {
  pageKey: string = 'contact'

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string): string {
    return this.translationService.getTranslationForKey(this.pageKey + '.' + key);
  }
}
