import {inject, Injectable} from '@angular/core';
import {ApiService} from "@core/services/api.service";
import {MovieFilter} from "@domain/data/models/movie.filter";
import {Observable} from "rxjs";
import {Movie} from "@domain/data/models/movie";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class MovieService {

  _apiSrv: ApiService = inject(ApiService);
  _translateSrv: TranslateService = inject(TranslateService);

  filter(movieFilter: MovieFilter): Observable<{
    results: Movie[],
    page: number,
    total_pages: number,
    total_results: number
  }> {

    return this._apiSrv.get(`/search/movie`, {...movieFilter, language: this._getLang()});
  }

  get(idMovie: number): Observable<Movie> {
    return this._apiSrv.get(`/movie/${idMovie}`, {language: this._getLang()});
  }

  private _getLang(): string {
    const lang = {
      en: 'en-US',
      es: 'es-ES',
    };

    return lang[this._translateSrv.currentLang];
  }
}
