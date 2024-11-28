import {Component, OnInit} from '@angular/core';
import { RouterOutlet } from '@angular/router';
import {TranslationService} from "./services/translation.service";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
  ],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit {
  title = 'zaietsWebsite';

  constructor(private translationService: TranslationService) {}

  ngOnInit(): void {
    this.translationService.getAllTranslationsForLanguage("en");
  }
}
