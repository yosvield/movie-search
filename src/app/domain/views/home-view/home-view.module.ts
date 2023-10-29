import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "@views/home-view/home-routing.module";
import {SharedModule} from "@shared/shared.module";
import {HomePageComponent} from '@views/home-view';
import {VoteAverageComponent} from "@shared/components/vote-average/vote-average.component";

const HOME_COMPONENTS = [
  HomePageComponent
];

@NgModule({
  declarations: [
    ...HOME_COMPONENTS
  ],
  imports: [
    SharedModule,
    HomeRoutingModule,
    VoteAverageComponent
  ]
})
export class HomeViewModule {
}
