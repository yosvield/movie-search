import {NgModule} from '@angular/core';
import {ViewsRoutingModule} from "./views-routing.module";
import {SharedModule} from "@shared/shared.module";
import {ConfigTokenPageComponent} from "@views/config-token-page";


@NgModule({
  declarations: [
    ConfigTokenPageComponent
  ],
  imports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule {
}
