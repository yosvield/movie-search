import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigTokenPageComponent, HomePageComponent} from "@views/home-view";
import {App} from "../../../config/app";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: App.ROUTES.ACCESS_TOKEN,
    component: ConfigTokenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
