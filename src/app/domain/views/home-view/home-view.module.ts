import {NgModule} from '@angular/core';
import {HomeRoutingModule} from "@views/home-view/home-routing.module";
import {SharedModule} from "@shared/shared.module";
import {ConfigTokenPageComponent, HomePageComponent} from '@views/home-view';

const HOME_COMPONENTS = [
  ConfigTokenPageComponent,
  HomePageComponent
];

@NgModule({
  declarations: [
    ...HOME_COMPONENTS
  ],
  imports: [
    SharedModule,
    HomeRoutingModule
  ]
})
export class HomeViewModule {
}
