import { Component } from '@angular/core';
import {SharedModule} from "../../shared/shared.module";
import {TranslationService} from "../../services/translation.service";

@Component({
  selector: 'app-skills',
  standalone: true,
  imports: [
    SharedModule
  ],
  templateUrl: './skills.component.html',
  styleUrl: './skills.component.scss'
})
export class SkillsComponent {
  pageKey: string = 'skills'

  constructor(private translationService: TranslationService) {}

  getTranslation(key: string) {
    return this.translationService.getTranslationForKey(this.pageKey + '.' + key);
  }
}
