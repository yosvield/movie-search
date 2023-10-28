import { NgModule } from '@angular/core';
import {ViewsRoutingModule} from "./views-routing.module";
import {SharedModule} from "@shared/shared.module";


@NgModule({
  declarations: [],
  imports: [
    SharedModule,
    ViewsRoutingModule,
  ]
})
export class ViewsModule { }
