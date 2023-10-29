import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {App} from "../../config/app";
import {ConfigTokenPageComponent} from "@views/config-token-page";
import {authGuard} from "@core/guard/auth.guard";

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-view/home-view.module').then(m => m.HomeViewModule),
    canActivate: [authGuard]
  },
  {
    path: App.ROUTES.MOVIE,
    loadChildren: () => import('@views/movie-view/movie-view.module').then(m => m.MovieViewModule),
    canActivate: [authGuard]
  },
  {
    path: App.ROUTES.ACCESS_TOKEN,
    component: ConfigTokenPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
