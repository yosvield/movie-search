import {Component, inject, OnInit} from '@angular/core';
import {MovieFilter} from "@domain/data/models/movie.filter";
import {Movie} from "@domain/data/models/movie";
import {MovieService} from "@domain/data/services/movie.service";
import {ActivatedRoute, Router} from "@angular/router";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movieFilter = new MovieFilter();

  movies: Movie[] = [];

  //<editor-fold desc="Services">
  private _movieSrv: MovieService = inject(MovieService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);

  //</editor-fold>

  ngOnInit(): void {
    this.movies.push(new Movie());
    this.movies.push(new Movie());
    this.movies.push(new Movie());
    this.movies.push(new Movie());

    this._activatedRoute.queryParams.subscribe((params) => {
      this.movieFilter = Object.assign(new MovieFilter(), params);
      this._search();
    });
  }

  submitForm() {
    this._router.navigate([], {
      queryParams: this.movieFilter,
      queryParamsHandling: 'merge'
    });
  }

  private _search() {
    this._movieSrv.filter(this.movieFilter)
      .subscribe((data) => {
        this.movies = data.results;
      });
  }
}
