import {TestBed} from '@angular/core/testing';

import {MovieService} from './movie.service';
import {HttpClient} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MovieFilter} from "@domain/data/models/movie.filter";
import {of} from "rxjs";

describe('MovieService', () => {
  let service: MovieService;
  let httpClientSpy: { get: jasmine.Spy };

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        ToastrModule.forRoot({
          preventDuplicates: false,
          positionClass: 'toast-top-right'
        }),
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    });

    httpClientSpy = jasmine.createSpyObj('ApiService', ['get']);
    service = TestBed.inject(MovieService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should get users', (done) => {
    const mockMovieFilter = new MovieFilter();
    mockMovieFilter.query = 'Pottersville';

    const mockMovies = {
      "page": 1,
      "results": [
        {
          "adult": false,
          "backdrop_path": "/y4hDOkRKW6UXQK4G0aAovbVb4d2.jpg",
          "genre_ids": [
            35
          ],
          "id": 413990,
          "original_language": "en",
          "original_title": "Pottersville",
          "overview": "Maynard, a beloved local businessman is mistaken for the legendary Bigfoot during an inebriated romp through town in a makeshift gorilla costume. The sightings set off an international Bigfoot media spectacle and a windfall of tourism dollars for a simple American town hit by hard times. When Brock Masterson, reality TV’s “Monster Hunter,” arrives to hunt the beast, Maynard agonizes over whether to come clean, destroying the rebirth of his beloved town, or perpetuate the inadvertent hoax.",
          "popularity": 5.987,
          "poster_path": "/zlQgswQ5GEklrbv8MkohQHyomZu.jpg",
          "release_date": "2017-11-10",
          "title": "Pottersville",
          "video": false,
          "vote_average": 4.952,
          "vote_count": 114
        }
      ],
      "total_pages": 1,
      "total_results": 1
    }

    httpClientSpy.get.and.returnValue(of(mockMovies))

    service.filter(mockMovieFilter).subscribe(res => {
      expect(res).toEqual(mockMovies);
      done();
    });
  });
});
