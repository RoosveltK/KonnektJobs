import { Component, OnInit, ViewEncapsulation } from "@angular/core";
import { NgbModal } from "@ng-bootstrap/ng-bootstrap";
import { OwlOptions } from "ngx-owl-carousel-o";
import { DashLangService } from "src/app/services/dash-lang.service";

@Component({
  selector: "app-index6",
  templateUrl: "./index6.component.html",
  styleUrls: ["./index6.component.scss"],
  encapsulation: ViewEncapsulation.None,
  styles: [
    `
      .dark-modal .modal-content {
        background-color: #000000;
        color: white;
        background: none;
        border: none;
      }
      .dark-modal .modal-header {
        border: none;
      }
      .dark-modal .close {
        color: white;
      }
      .dark-modal .modal-dialog {
        max-width: 800px;
      }
    `,
  ],
})
/**
 * Index-6 component
 */
export class Index6Component implements OnInit {
  currentSection = "home";
  languages = [];
  fullNameLang = null;
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
      title: "Pick1",
      link: "assets/images/assets/photo1.jpg",
    },

    {
      id: 2,
      alt: "image_3",
      title: "home",
      link: "assets/images/assets/photo3.jpg",
    },
    {
      id: 3,
      alt: "image_4",
      title: "end",
      link: "assets/images/assets/photo4.jpg",
    },
  ];

  constructor(
    private modalService: NgbModal,
    private langService: DashLangService
  ) {}

  ngOnInit(): void {
    this.languages = this.langService.getLanguages();
    this.fullNameLang = this.langService.langSelected;
    this.selected = this.fullNameLang.value;
  }

  changeLanguage(elt) {
    this.langService.setLanguage(elt.value);
    this.fullNameLang = this.langService.langSelected;
    this.selected = this.fullNameLang.value;
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
  fullNameLang;
  /**
   * Toggle navbar
   */
  toggleMenu() {
    document.getElementById("navbarCollapse").classList.toggle("show");
  }

  /**
   * Open modal for show the video
   * @param content content of modal
   */
  openWindowCustomClass(videocontent) {
    this.modalService.open(videocontent, {
      windowClass: "dark-modal",
      centered: true,
    });
  }
}
