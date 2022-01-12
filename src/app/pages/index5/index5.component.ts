import { TranslateService } from "@ngx-translate/core";
import { DashLangService } from "./../../services/dash-lang.service";
import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OwlOptions } from "ngx-owl-carousel-o";

@Component({
  selector: "app-index5",
  templateUrl: "./index5.component.html",
  styleUrls: ["./index5.component.scss"],
  encapsulation: ViewEncapsulation.None,
})
/**
 * Index-5 component
 */
export class Index5Component implements OnInit {
  currentSection = "home";
  images = [944, 1011, 984].map((n) => `https://picsum.photos/id/${n}/900/500`);
  languages = [];
  fullNameLang;
  selected = "";
  customOptions: OwlOptions = {
    margin: 10,
    loop: true,
    responsive: {
      0: {
        items: 1,
      },
      576: {
        items: 2,
      },
    },
    nav: true,
    navText: [
      "<i class='mdi mdi-chevron-left'></i>",
      "<i class='mdi mdi-chevron-right'></i>",
    ],
  };

  options: OwlOptions = {
    navText: [
      '<i class="mdi mdi-chevron-left"></i>',
      '<i class="mdi mdi-chevron-right"></i>',
    ],
  };

  slidesStore = [
    {
      id: 1,
      alt: "image_1",
      title: "dash",
      link: "assets/images/Home.png",
    },
    {
      id: 2,
      alt: "image_2",
      title: "default",
      link: "assets/images/bg.png",
    },
    {
      id: 2,
      alt: "image_3",
      title: "home",
      link: "assets/images/home-img.png",
    },
  ];

  constructor(
    private langService: DashLangService,
    private translatetor: TranslateService,
    private modalService: NgbModal
  ) {}

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

  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, {
      windowClass: "dark-modal",
      centered: true,
    });
  }

  setStyles(imgUrl: string) {
    return {
      "background-image": `url('${imgUrl}')`,
      "max-height": "672px",
    };
  }
}
