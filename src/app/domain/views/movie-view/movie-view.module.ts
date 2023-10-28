import {NgModule} from '@angular/core';
import {SharedModule} from "@shared/shared.module";
import {DetailPageComponent} from '@views/movie-view';
import {MovieRoutingModule} from "@views/movie-view/movie-routing.module";
import {MatCardModule} from "@angular/material/card";

const MOVIE_COMPONENTS = [
  DetailPageComponent
];

@NgModule({
  declarations: [
    ...MOVIE_COMPONENTS
  ],
  imports: [
    SharedModule,
    MovieRoutingModule,
    MatCardModule
  ]
})
export class MovieViewModule {
}
