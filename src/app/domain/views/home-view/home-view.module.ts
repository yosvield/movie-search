import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {HomePageComponent} from '@views/home-view';
import {HomeRoutingModule} from "@views/home-view/home-routing.module";

const HOME_COMPONENTS = [
  HomePageComponent
];

@NgModule({
  declarations: [
    ...HOME_COMPONENTS
  ],
  imports: [
    CommonModule,
    HomeRoutingModule
  ]
})
export class HomeViewModule {
}
