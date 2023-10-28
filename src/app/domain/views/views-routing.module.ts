import {NgModule} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./home-view/home-view.module').then(m => m.HomeViewModule)
  },
  {
    path: 'pelicula',
    loadChildren: () => import('@views/movie-view/movie-view.module').then(m => m.MovieViewModule)
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ViewsRoutingModule {
}
