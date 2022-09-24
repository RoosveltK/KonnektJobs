import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { Index6Component } from "./index6/index6.component";

const routes: Routes = [
  {
    path: "",
    component: Index6Component,
  },
  // {
  //   path: "index6",
  //   component: Index6Component,
  // },
  // { path: "index-1", component: Index1Component },
  // { path: "index-2", component: Index2Component },
  // { path: "index-3", component: Index3Component },
  // { path: "index-4", component: Index4Component },
  // { path: "index-5", component: Index5Component },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PagesRoutingModule {}
