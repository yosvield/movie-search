import {Component, inject} from '@angular/core';
import {Router, RouterLink, RouterOutlet} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {App} from "../../../config/app";
import {TranslateService} from "@ngx-translate/core";
import {MatSidenavModule} from "@angular/material/sidenav";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterOutlet,
    SharedModule,
    RouterLink,
    MatSidenavModule,
  ],
  standalone: true
})
export class DefaultLayoutComponent {

  private _router = inject(Router);
  private _translateSrv = inject(TranslateService);

  protected readonly App = App;

  go(commands: any[]) {
    this._router.navigate(commands)
  }

  changeLanguage(lang: string) {
    this._translateSrv.use(lang);
  }
}
