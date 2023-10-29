import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {DefaultLayoutComponent} from "@core/containers/default-layout/default-layout.component";

const routes: Routes = [
  {
    path: '',
    redirectTo: "en",
    pathMatch: "full"
  },
  {
    path: ':lang',
    component: DefaultLayoutComponent,
    loadChildren: () => import('@views/views.module').then((m) => m.ViewsModule)
  },
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    scrollPositionRestoration: 'top',
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
