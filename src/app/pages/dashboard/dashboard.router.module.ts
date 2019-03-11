import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { DashboardPage } from "./dashboard.page";

const routes: Routes = [
  {
    path: "",
    component: DashboardPage,
    children: [
      {
        path: "home",
        children: [
          {
            path: "",
            loadChildren: "./home/home.module#HomePageModule"
          }
        ]
      },
      {
        path: "profile",
        children: [
          {
            path: "",
            loadChildren: "./profile/profile.module#ProfilePageModule"
          }
        ]
      },
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      }
    ]
  },
  {
    path: "",
    redirectTo: "home",
    pathMatch: "full"
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DashboardPageRoutingModule {}
