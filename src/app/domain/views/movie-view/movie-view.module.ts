import {NgModule} from '@angular/core';
import {SharedModule} from "@shared/shared.module";
import {DetailPageComponent} from '@views/movie-view';
import {MovieRoutingModule} from "@views/movie-view/movie-routing.module";
import {MatCardModule} from "@angular/material/card";
import {VoteAverageComponent} from "@shared/components/vote-average/vote-average.component";
import {PosterComponent} from "@shared/components/poster/poster.component";

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
        MatCardModule,
        VoteAverageComponent,
        PosterComponent
    ]
})
export class MovieViewModule {
}
