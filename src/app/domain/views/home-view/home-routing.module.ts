import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailPageComponent} from "@views/movie-view/detail-page";
import {HomePageComponent} from "@views/home-view/home-page";

const routes: Routes = [
  {
    path: '',
    component: HomePageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule {
}
