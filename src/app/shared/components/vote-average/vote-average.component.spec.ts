import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VoteAverageComponent } from './vote-average.component';
import {DecimalPipe} from "@angular/common";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatTooltipModule} from "@angular/material/tooltip";
import {TranslateLoader, TranslateModule} from "@ngx-translate/core";
import {HttpLoaderFactory} from "@core/factory";
import {HttpClient, HttpClientModule} from "@angular/common/http";

describe('VoteAverageComponent', () => {
  let component: VoteAverageComponent;
  let fixture: ComponentFixture<VoteAverageComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        DecimalPipe,
        HttpClientModule,
        MatProgressSpinnerModule,
        MatTooltipModule,
        TranslateModule.forRoot({
          loader: {
            provide: TranslateLoader,
            useFactory: HttpLoaderFactory,
            deps: [HttpClient]
          }
        })
      ],
      declarations: []
    });
    fixture = TestBed.createComponent(VoteAverageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
