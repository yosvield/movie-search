import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from "@angular/material/button";
import {MatCardModule} from "@angular/material/card";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatMenuModule} from "@angular/material/menu";
import {MatRippleModule} from "@angular/material/core";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {PaginatorIntlService} from "@shared/services/paginator-intl.service";

const MATERIAL_COMPONENTS = [
  MatButtonModule,
  MatCardModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  MatPaginatorModule,
  MatRippleModule,
  MatToolbarModule,
  MatTooltipModule
]

const ANGULAR_MODULE = [
  FlexLayoutModule,
  FormsModule,
  HttpClientModule,
  ReactiveFormsModule,
  TranslateModule
]

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    ...ANGULAR_MODULE,
    ...MATERIAL_COMPONENTS
  ],
  exports: [
    CommonModule,
    ...ANGULAR_MODULE,
    ...MATERIAL_COMPONENTS
  ],
  providers: [
    {provide: MatPaginatorIntl, useClass: PaginatorIntlService}
  ]
})
export class SharedModule {
}
