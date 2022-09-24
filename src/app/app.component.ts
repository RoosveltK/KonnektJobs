import { Component } from "@angular/core";
import { DashLangService } from "./services/dash-lang.service";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.scss"],
})
export class AppComponent {
  title = "KonnektJobs";

  constructor(languageService: DashLangService) {
    languageService.setInitialAppLanguage();
  }
}
