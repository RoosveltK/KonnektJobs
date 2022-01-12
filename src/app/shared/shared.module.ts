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

@NgModule({
  declarations: [
    ServicesComponent,
    FeaturesComponent,
    ClientsComponent,
    PlansComponent,
    FooterComponent,
    ScrollspyDirective,
    PartnerComponent,
  ],
  imports: [
    CommonModule,
    FeatherModule.pick(icons),
    CarouselModule,
    CountToModule,
    TranslateModule,
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
  ],
})
export class SharedModule {}
