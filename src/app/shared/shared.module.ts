import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TranslateModule} from '@ngx-translate/core';
import {MatButtonModule} from "@angular/material/button";
import {MatButtonToggleModule} from "@angular/material/button-toggle";
import {MatCardModule} from "@angular/material/card";
import {MatExpansionModule} from "@angular/material/expansion";
import {MatIconModule} from "@angular/material/icon";
import {MatInputModule} from "@angular/material/input";
import {MatListModule} from "@angular/material/list";
import {MatMenuModule} from "@angular/material/menu";
import {MatNativeDateModule, MatRippleModule} from "@angular/material/core";
import {MatPaginatorIntl, MatPaginatorModule} from "@angular/material/paginator";
import {MatProgressSpinnerModule} from "@angular/material/progress-spinner";
import {MatRadioModule} from "@angular/material/radio";
import {MatSelectModule} from "@angular/material/select";
import {MatTableModule} from "@angular/material/table";
import {MatTabsModule} from "@angular/material/tabs";
import {MatToolbarModule} from "@angular/material/toolbar";
import {MatTooltipModule} from "@angular/material/tooltip";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import {FlexLayoutModule} from "@angular/flex-layout";
import {MatGridListModule} from "@angular/material/grid-list";
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
