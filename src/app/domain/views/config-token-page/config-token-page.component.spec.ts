import {ComponentFixture, TestBed} from '@angular/core/testing';
import {ConfigTokenPageComponent} from "@views/config-token-page/config-token-page.component";
import {SharedModule} from "@shared/shared.module";
import {ToastrModule} from "ngx-toastr";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClient} from "@angular/common/http";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";


describe('ConfigTokenPageComponent', () => {
  let component: ConfigTokenPageComponent;
  let fixture: ComponentFixture<ConfigTokenPageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        SharedModule,
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
      declarations: [ConfigTokenPageComponent]
    });
    fixture = TestBed.createComponent(ConfigTokenPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
