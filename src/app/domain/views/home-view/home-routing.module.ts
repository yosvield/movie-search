import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {ConfigTokenPageComponent, HomePageComponent} from "@views/home-view";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  },
  {
    path: 'token-acceso',
    component: ConfigTokenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
