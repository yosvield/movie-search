import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DetailPageComponent} from '@views/movie-view';
import {SharedModule} from "@shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClient} from "@angular/common/http";
import {AppRoutingModule} from "../../../../app-routing.module";

describe('DetailPageComponent', () => {
  let component: DetailPageComponent;
  let fixture: ComponentFixture<DetailPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
        AppRoutingModule,
        BrowserAnimationsModule,
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
      declarations: [DetailPageComponent]
    });
    fixture = TestBed.createComponent(DetailPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
