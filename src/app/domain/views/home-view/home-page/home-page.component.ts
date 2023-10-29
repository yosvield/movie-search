import {Component, inject, OnInit} from '@angular/core';
import {MovieFilter} from "@domain/data/models/movie.filter";
import {Movie} from "@domain/data/models/movie";
import {MovieService} from "@domain/data/services/movie.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movieFilter = new MovieFilter();
  page_size: number = 0;
  length: number = 0;

  movies: Movie[] = [];

  //<editor-fold desc="Services">
  private _movieSrv: MovieService = inject(MovieService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  //</editor-fold>

  ngOnInit(): void {
    this._activatedRoute.queryParams.subscribe((params) => {
      const paramsMap = convertToParamMap(params);

      if (paramsMap.has('query')) {
        this.movieFilter = Object.assign(new MovieFilter(), params);
        this._search();
      }
    });
  }

  submitForm() {
    this.movieFilter.page = 1;

    this._router.navigate([], {
      queryParams: this.movieFilter,
      queryParamsHandling: 'merge'
    });
  }

  trackByFn(index: number, movie: Movie) {
    return movie.id;
  }

  changePage(event: any) {
    this.movieFilter.page = event.pageIndex + 1;

    this._router.navigate([], {
      queryParams: this.movieFilter,
      queryParamsHandling: 'merge'
    });
  }

  private _search() {
    this._movieSrv.filter(this.movieFilter)
      .subscribe((data) => {
        this.movies = data.results;
        this.movieFilter.page = data.page;
        this.length = data.total_results;
      });
  }
}
