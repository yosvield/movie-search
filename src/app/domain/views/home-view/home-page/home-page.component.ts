import {Component, inject, OnInit} from '@angular/core';
import {MovieFilter} from "@domain/data/models/movie.filter";
import {Movie} from "@domain/data/models/movie";
import {MovieService} from "@domain/data/services/movie.service";
import {ActivatedRoute, convertToParamMap, Router} from "@angular/router";
import {MatSnackBar} from "@angular/material/snack-bar";
import {TranslateService} from "@ngx-translate/core";
import {take} from "rxjs";
import {App} from "../../../../config/app";

@Component({
  selector: 'app-home-page',
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss']
})
export class HomePageComponent implements OnInit {

  movieFilter = new MovieFilter();
  length: number = 0;

  movies: Movie[] = [];

  private _movieSrv: MovieService = inject(MovieService);
  private _translate = inject(TranslateService);
  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _snackBar = inject(MatSnackBar);


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

        if (!this.movies.length) {
          this._suggestLanguageChange();
        }
      });
  }

  private _suggestLanguageChange(): void {
    const message = this._translate.instant('MSG.SUGGEST_LANGUAGE_CHANGE');
    const action = this._translate.instant('LABEL.CHANGE');

    let snackBarRef = this._snackBar.open(message, action, {
      horizontalPosition: 'center',
      verticalPosition: 'top',
      duration: 3000
    });

    snackBarRef.onAction().subscribe(() => {
      this._translate.onLangChange
        .pipe(take(1))
        .subscribe(() => {
          this._search();
        });

      this._translate.use(App.LANGUAGE.toggle(this._translate.currentLang));
    });
  }
}
