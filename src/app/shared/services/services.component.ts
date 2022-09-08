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
  allServiceData: Services[];

  constructor(private serviceLanguege: DashLangService) {}

  ngOnInit(): void {
    // fetches the data
    this._fetchData();
    // this.viewMin();
  }

  /**
   * Service data
   */
  private _fetchData() {
    this.serviceData = serviceData;
    // this.allServiceData = serviceData;
  }

  viewAll() {
    this.serviceData = [...this.allServiceData];
  }
  viewMin() {
    for (let index = 0; index < 3; index++) {
      this.serviceData.push(this.allServiceData[index]);
    }
  }
}
