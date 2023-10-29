import {Component, inject, OnInit} from '@angular/core';
import {ActivatedRoute, NavigationEnd, Router, RouterLink, RouterOutlet} from "@angular/router";
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
export class DefaultLayoutComponent implements OnInit {
  currentUrl?: string;

  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  private _translateSrv = inject(TranslateService);

  protected readonly App = App;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.currentUrl = this._router.url;
      this._changeTranslate(params['lang']);
    });

    this._router.events.subscribe((evt: any) => {
      switch (true) {
        case evt instanceof NavigationEnd:
          this.currentUrl = evt.url;
          break;
        default : {
          break;
        }
      }
    });
  }

  go(commands: any[]) {
    this._router.navigate(commands);
  }

  changeLanguage(lang: string) {
    this._changeTranslate(lang);

    const paths = this.currentUrl?.split('/');

    // @ts-ignore
    paths[1] = lang;
    // @ts-ignore
    this._router.navigateByUrl(paths.join('/'));

  }

  private _changeTranslate(lang: string) {
    this._translateSrv.use(lang);
  }
}
