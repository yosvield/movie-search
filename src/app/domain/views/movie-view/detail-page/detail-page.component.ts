import {Component, inject, OnInit} from '@angular/core';
import {MovieService} from "@domain/data/services/movie.service";
import {ActivatedRoute} from "@angular/router";
import {Movie} from "@domain/data/models/movie";

@Component({
  selector: 'app-detail-page',
  templateUrl: './detail-page.component.html',
  styleUrls: ['./detail-page.component.scss']
})
export class DetailPageComponent implements OnInit {

  movie: Movie | undefined;

  private _movieSrv: MovieService = inject(MovieService);
  private _activatedRoute = inject(ActivatedRoute);

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this._getDetail(params['id_pelicula']);
    });
  }



  private _getDetail(idMovie: number) {
    this._movieSrv.get(idMovie)
      .subscribe((data) => {
        this.movie = Object.assign(new Movie(), data);
        this.movie.refactor();
      });
  }
}
