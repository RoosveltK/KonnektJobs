import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
export const LANG_KEY = "LANG_KEY";
@Injectable({
  providedIn: "root",
})
export class DashLangService {
  langSelected = "";

  constructor(private translate: TranslateService) {}

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    const langSave = localStorage.getItem(LANG_KEY);
    if (langSave != null) {
      this.setLanguage(JSON.parse(langSave));
      this.langSelected = JSON.parse(langSave);
    }
  }

  getLanguages() {
    return [
      { text: `Menu.lanEn`, value: "en" },
      { text: `Menu.lanFr`, value: "fr" },
    ];
  }

  setLanguage(lang) {
    this.translate.use(lang);
    this.langSelected = lang;
    localStorage.setItem(LANG_KEY, JSON.stringify(lang));
  }
}
