import { Component, OnInit } from "@angular/core";
import { DashLangService } from "src/app/services/dash-lang.service";

@Component({
  selector: "app-index1",
  templateUrl: "./index1.component.html",
  styleUrls: ["./index1.component.scss"],
})

/**
 * Index-1 component
 */
export class Index1Component implements OnInit {
  currentSection = "home";
  languages = [];
  fullNameLang;
  selected = "";

  constructor(private langService: DashLangService) {}

  ngOnInit(): void {
    this.languages = this.langService.getLanguages();
    this.selected = this.langService.langSelected;

    if (this.selected == "" || this.selected == "en") {
      this.selected = "en";
      this.fullNameLang = "English";
    } else this.fullNameLang = "Français";
  }

  changeLanguage(elt) {
    this.langService.setLanguage(elt.value);

    this.selected = this.langService.langSelected;

    if (this.selected == "en") {
      this.selected = "en";
      this.fullNameLang = "English";
    } else this.fullNameLang = "Français";
  }
  /**
   * Window scroll method
   */
  windowScroll() {
    const navbar = document.getElementById("navbar");
    if (
      document.body.scrollTop >= 50 ||
      document.documentElement.scrollTop > 50
    ) {
      navbar.classList.add("nav-sticky");
    } else {
      navbar.classList.remove("nav-sticky");
    }
  }

  /**
   * Section changed method
   * @param sectionId specify the current sectionID
   */
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById("navbarCollapse").classList.toggle("show");
  }
}
