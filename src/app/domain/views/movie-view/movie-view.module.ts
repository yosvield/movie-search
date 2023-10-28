import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {DetailPageComponent} from '@views/movie-view';
import {MovieRoutingModule} from "@views/movie-view/movie-routing.module";

const MOVIE_COMPONENTS = [
  DetailPageComponent
];

@NgModule({
  declarations: [
    ...MOVIE_COMPONENTS
  ],
  imports: [
    CommonModule,
    MovieRoutingModule
  ]
})
export class MovieViewModule {
}
