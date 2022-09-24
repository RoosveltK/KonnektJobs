import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { PagesRoutingModule } from "./page-routing.module";
import { SharedModule } from "../shared/shared.module";

import { NgxYoutubePlayerModule } from "ngx-youtube-player";
import { ScrollToModule } from "@nicky-lenaers/ngx-scroll-to";
import { Index6Component } from "./index6/index6.component";

// NgBootstrap
import { NgbModalModule } from "@ng-bootstrap/ng-bootstrap";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { TranslateModule } from "@ngx-translate/core";
import { CarouselModule } from "ngx-owl-carousel-o";

@NgModule({
  declarations: [Index6Component],
  imports: [
    CommonModule,
    ScrollToModule.forRoot(),
    PagesRoutingModule,
    SharedModule,
    NgbModalModule,
    NgxYoutubePlayerModule,
    NgbModule,
    CarouselModule,
    // TranslateModule,
  ],
})
export class PagesModule {}
