import {ComponentFixture, TestBed} from '@angular/core/testing';

import {DefaultLayoutComponent} from './default-layout.component';
import {ActivatedRoute, RouterLink, RouterLinkActive, RouterOutlet} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {MatSidenavModule} from "@angular/material/sidenav";
import {BrowserDynamicTestingModule} from "@angular/platform-browser-dynamic/testing";
import {NgModule} from "@angular/core";
import {RouterTestingModule} from "@angular/router/testing";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClient} from "@angular/common/http";

describe('DefaultLayoutComponent', () => {
  let component: DefaultLayoutComponent;
  let fixture: ComponentFixture<DefaultLayoutComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        RouterOutlet,
        SharedModule,
        RouterLink,
        RouterTestingModule,
        MatSidenavModule,
        RouterLinkActive,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ]
    });
    fixture = TestBed.createComponent(DefaultLayoutComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
