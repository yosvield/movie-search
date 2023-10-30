import {TestBed} from '@angular/core/testing';

import {MovieService} from './movie.service';
import {HttpClient} from "@angular/common/http";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClientTestingModule} from "@angular/common/http/testing";
import {MovieFilter} from "@domain/data/models/movie.filter";
import {of} from "rxjs";
import {ApiService} from "@core/services/api.service";

describe('MovieService', () => {
  let service: MovieService;
  let apiServiceSpy: jasmine.SpyObj<ApiService>;

  beforeEach(() => {
    const spy = jasmine.createSpyObj('ApiService', ['get']);

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
      ],
      providers: [
        {provide: ApiService, useValue: spy}
      ]
    });

    service = TestBed.inject(MovieService);
    apiServiceSpy = TestBed.inject(ApiService) as jasmine.SpyObj<ApiService>;
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });

  it('should filter movie', (done) => {
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
    };

    apiServiceSpy.get.and.returnValue(of(mockMovies))

    service.filter(mockMovieFilter).subscribe(res => {
      expect(res).toEqual(mockMovies);
      done();
    });
  });


  it('should get movie', (done) => {
    const mockIdMovie = 862968;

    const mockMovie = {
      "adult": false,
      "backdrop_path": "/bMRofddQE58ToKM7GtdJy6MuKoY.jpg",
      "belongs_to_collection": null,
      "budget": 0,
      "genres": [
        {
          "id": 18,
          "name": "Drama"
        },
        {
          "id": 80,
          "name": "Crime"
        }
      ],
      "homepage": "https://www.netflix.com/title/81614419",
      "id": 862968,
      "imdb_id": "tt15257160",
      "original_language": "en",
      "original_title": "Pain Hustlers",
      "overview": "After losing her job, a single mom falls into a lucrative but ultimately dangerous scheme selling prescription drugs.",
      "popularity": 97.761,
      "poster_path": "/m0gM9jE1KmCkXZRqkeNYEQZdVsZ.jpg",
      "production_companies": [
        {
          "id": 159314,
          "logo_path": null,
          "name": "Grey Matter Productions",
          "origin_country": "US"
        },
        {
          "id": 159315,
          "logo_path": null,
          "name": "Wychwood Media",
          "origin_country": ""
        }
      ],
      "production_countries": [
        {
          "iso_3166_1": "US",
          "name": "United States of America"
        }
      ],
      "release_date": "2023-10-20",
      "revenue": 0,
      "runtime": 122,
      "spoken_languages": [
        {
          "english_name": "English",
          "iso_639_1": "en",
          "name": "English"
        }
      ],
      "status": "Released",
      "tagline": "An American excess story.",
      "title": "Pain Hustlers",
      "video": false,
      "vote_average": 6.4,
      "vote_count": 70
    };

    apiServiceSpy.get.and.returnValue(of(mockMovie))

    service.get(mockIdMovie).subscribe(res => {
      expect(res).toEqual(mockMovie);
      done();
    });
  });
});
