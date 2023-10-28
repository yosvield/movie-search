import {inject, Injectable} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {MovieFilter} from "@domain/data/models/movie.filter";
import {Observable} from "rxjs";
import {Movie} from "@domain/data/models/movie";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  _apiSrv: ApiService = inject(ApiService);

  filter(movieFilter: MovieFilter): Observable<{ results: Movie[], page: number, total_pages: number }> {
    return this._apiSrv.get(`/search/movie`, movieFilter);
  }

  get(idMovie: number): Observable<Movie> {
    return this._apiSrv.get(`/movie/${idMovie}`);
  }
}
