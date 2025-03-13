import {Injectable, OnInit} from '@angular/core';
import {WebApiService} from "./web-api.service";
import {HostUrl} from "../entities/HostUrl";
import {TranslationKeyValueDTO} from "../entities/TranslationKeyValueDTO";
import {Language} from "../entities/Language";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private webApiService: WebApiService ) {}

  translations: Map<string, string> = new Map;

  getAllTranslationsForLanguage(languageCode: string) {
    this.webApiService.sendGetRequest(HostUrl.hostUrl + "/translation/" + languageCode).subscribe(value => {
      const translationDTO: TranslationKeyValueDTO[] = value.body;
      translationDTO.forEach(dto => this.translations.set(dto.key, dto.value))
    })
  }

  getTranslationForKey(key: string): string {
    return this.translations.get(key) || '[Error: Missing translation]';
  }

  getAllLanguages(): Language[] {
    let languages: Language[] = [];
    this.webApiService.sendGetRequest(HostUrl.hostUrl + "/language/getAll").subscribe(response => languages = response.body);
    return languages;
  }
}
