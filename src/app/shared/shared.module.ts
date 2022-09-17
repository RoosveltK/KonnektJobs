import { NgModule } from "@angular/core";
import { CommonModule } from "@angular/common";

import { ScrollspyDirective } from "./scrollspy.directive";
import { FeatherModule } from "angular-feather";
import { CarouselModule } from "ngx-owl-carousel-o";
import { CountToModule } from "angular-count-to";
import {
  Grid,
  Edit,
  Headphones,
  Layers,
  Code,
  Tablet,
  BarChart2,
  Check,
  PieChart,
  ArrowRight,
  Bookmark,
  Coffee,
  Award,
  UserPlus,
  MapPin,
  Mail,
  Phone,
  Gift,
  Percent,
  CreditCard,
  Heart,
  Calendar,
  ShoppingBag,
} from "angular-feather/icons";

const icons = {
  Grid,
  Edit,
  Headphones,
  Layers,
  Code,
  Tablet,
  BarChart2,
  Check,
  PieChart,
  ArrowRight,
  Bookmark,
  UserPlus,
  Coffee,
  Award,
  MapPin,
  Mail,
  Phone,
  Gift,
  Percent,
  CreditCard,
  Heart,
  Calendar,
  ShoppingBag,
};
import { TranslateModule } from "@ngx-translate/core";

import { ServicesComponent } from "./services/services.component";
import { FeaturesComponent } from "./features/features.component";
import { ClientsComponent } from "./clients/clients.component";
import { PlansComponent } from "./plans/plans.component";
import { FooterComponent } from "./footer/footer.component";
import { PartnerComponent } from "./partner/partner.component";
import { AboutComponent } from "./about/about.component";
import { OurVisionComponent } from "./our-vision/our-vision.component";
import { OurProcedureComponent } from "./our-procedure/our-procedure.component";
import { ContactUsComponent } from "./contact-us/contact-us.component";
import { ReactiveFormsModule } from "@angular/forms";

@NgModule({
  declarations: [
    ServicesComponent,
    FeaturesComponent,
    ClientsComponent,
    PlansComponent,
    FooterComponent,
    ScrollspyDirective,
    PartnerComponent,
    AboutComponent,
    OurVisionComponent,
    OurProcedureComponent,
    ContactUsComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    CarouselModule,
    CountToModule,
    TranslateModule,
    ReactiveFormsModule,
  ],
  exports: [
    ServicesComponent,
    FeaturesComponent,
    ClientsComponent,
    PlansComponent,
    FooterComponent,
    ScrollspyDirective,
    FeatherModule,
    TranslateModule,
    PartnerComponent,
    AboutComponent,
    OurVisionComponent,
    OurProcedureComponent,
    ContactUsComponent,
  ],
})
export class SharedModule {}
