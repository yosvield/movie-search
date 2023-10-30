import {ComponentFixture, TestBed} from '@angular/core/testing';
import {HomePageComponent} from '@views/home-view';
import {SharedModule} from "@shared/shared.module";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClient} from "@angular/common/http";
import {AppRoutingModule} from "../../../../app-routing.module";

describe('HomePageComponent', () => {
  let component: HomePageComponent;
  let fixture: ComponentFixture<HomePageComponent>;

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
      declarations: [HomePageComponent]
    });
    fixture = TestBed.createComponent(HomePageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
