import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DetailPageComponent} from "@views/movie-view/detail-page";

const routes: Routes = [
  {
    path: '',
    component: DetailPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MovieRoutingModule {
}
