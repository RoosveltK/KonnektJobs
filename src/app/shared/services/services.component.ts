import { Component, OnInit } from "@angular/core";

import { Services } from "./services.model";
import { serviceData } from "./data";
import { DashLangService } from "src/app/services/dash-lang.service";

@Component({
  selector: "app-services",
  templateUrl: "./services.component.html",
  styleUrls: ["./services.component.scss"],
})
/**
 * Services component
 */
export class ServicesComponent implements OnInit {
  serviceData: Services[];

  constructor(private serviceLanguege: DashLangService) {}

  ngOnInit(): void {
    // fetches the data
    this._fetchData();
  }

  /**
   * Service data
   */
  private _fetchData() {
    this.serviceData = serviceData;
    // this.serviceData.forEach((elt) => {
    //   elt.text = this.serviceLanguege.translateInstant(elt.text);
    //   elt.title = this.serviceLanguege.translateInstant(elt.title);
    // });
  }
}
