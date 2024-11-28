import {Injectable, OnInit} from '@angular/core';
import {WebApiService} from "./web-api.service";
import {HostUrl} from "../entities/HostUrl";

@Injectable({
  providedIn: 'root'
})
export class TranslationService {

  constructor(private webApiService: WebApiService ) {}

  translations: {key: string, value: string};

  getAllTranslationsForLanguage(languageCode: string) {
    this.webApiService.sendGetRequest(HostUrl.hostUrl + "/translation/" + languageCode).subscribe(value => this.translations = value)
  }
}
