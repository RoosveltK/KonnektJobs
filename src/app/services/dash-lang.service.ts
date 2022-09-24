import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
export const LANG_KEY = "LANG_KEY";

@Injectable({
  providedIn: "root",
})
export class DashLangService {
  langSelected = {
    text: `LANG.deu`,
    value: "deu",
    flag: "assets/images/lang/deu.png",
  };

  constructor(private translate: TranslateService) {}

  setInitialAppLanguage() {
    const langSave = localStorage.getItem(LANG_KEY);
    if (langSave != null) {
      this.setLanguage(langSave);
      this.langSelected = this.getLanguages().find(
        (item) => item.value === langSave
      );
    } else {
      this.translate.setDefaultLang(this.langSelected.value);
    }
  }

  getLanguages() {
    return [
      { text: `LANG.deu`, value: "deu", flag: "assets/images/lang/deu.png" },
      { text: `LANG.fr`, value: "fr", flag: "assets/images/lang/fr.png" },
    ];
  }

  getLanguage(val) {
    return this.getLanguages().find((item) => item.value === val);
  }

  setLanguage(lang) {
    this.translate.use(lang);
    this.langSelected = this.getLanguages().find((item) => item.value == lang);
    localStorage.setItem(LANG_KEY, lang);
  }

  translateInstant = (word) => this.translate.get(word);
}
