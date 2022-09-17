import { Injectable } from "@angular/core";
import { TranslateService } from "@ngx-translate/core";
export const LANG_KEY = "LANG_KEY";

@Injectable({
  providedIn: "root",
})
export class DashLangService {
  langSelected;

  constructor(private translate: TranslateService) {}

  setInitialAppLanguage() {
    let language = this.translate.getBrowserLang();
    this.translate.setDefaultLang(language);
    this.langSelected = this.getLanguages().find(
      (item) => item.value == language
    );

    const langSave = localStorage.getItem(LANG_KEY);

    if (langSave != null) {
      this.setLanguage(langSave);
      this.langSelected = this.getLanguages().find(
        (item) => item.value === langSave
      );
    }
  }

  getLanguages() {
    return [
      { text: `LANG.deu`, value: "deu", flag: "assets/images/lang/deu.png" },
      { text: `LANG.fr`, value: "fr", flag: "assets/images/lang/fr.png" },
    ];
  }

  setLanguage(lang) {
    this.translate.use(lang);
    this.langSelected = this.getLanguages().find((item) => item.value == lang);
    localStorage.setItem(LANG_KEY, lang);
  }
  translateInstant = (word) => this.translate.get(word);
}
