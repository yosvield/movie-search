import {Component, inject, OnInit} from '@angular/core';
import {
  ActivatedRoute,
  IsActiveMatchOptions,
  NavigationEnd,
  Router,
  RouterLink,
  RouterLinkActive,
  RouterOutlet
} from "@angular/router";
import {SharedModule} from "@shared/shared.module";
import {App} from "../../../config/app";
import {TranslateService} from "@ngx-translate/core";
import {MatSidenavModule} from "@angular/material/sidenav";
import {Location} from "@angular/common";

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss'],
  imports: [
    RouterOutlet,
    SharedModule,
    RouterLink,
    MatSidenavModule,
    RouterLinkActive,
  ],
  standalone: true
})
export class DefaultLayoutComponent implements OnInit {
  currentUrl: string;

  private _router = inject(Router);
  private _activatedRoute = inject(ActivatedRoute);
  public _translateSrv = inject(TranslateService);
  private _location = inject(Location);

  protected readonly App = App;

  ngOnInit(): void {
    this._activatedRoute.params.subscribe((params) => {
      this.currentUrl = this._router.url;
      this.changeLanguage(params['lang']);
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

    this._translateSrv.onLangChange
      .subscribe((lang) => {
        const paths = this.currentUrl.split('/');
        paths[1] = paths[1].replace(/^.{2}/, lang.lang);

        this._router.navigateByUrl(paths.join('/'));
      });
  }

  changeLanguage(lang: string) {
    this._translateSrv.use(lang);
  }

  goHome() {
    this._router.navigate([App.ROUTES.BASE, this._translateSrv.currentLang]);
  }

  back() {
    this._location.back();
  }

  isActiveHome(): boolean {
    const options: IsActiveMatchOptions = {
      matrixParams: 'ignored',
      queryParams: 'ignored',
      paths: 'exact',
      fragment: 'ignored'
    };
    return this._router.isActive(this._router.createUrlTree([App.ROUTES.BASE, this._translateSrv.currentLang]), options);
  }
}
