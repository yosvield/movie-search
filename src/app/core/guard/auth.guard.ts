import {CanActivateFn, Router} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "@core/services/auth.service";
import {App} from "../../config/app";
import {TranslateService} from "@ngx-translate/core";

export const authGuard: CanActivateFn = () => {

  if (!inject(AuthService).getToken()) {
    inject(Router).navigate([App.ROUTES.BASE, inject(TranslateService).currentLang, App.ROUTES.ACCESS_TOKEN]);

    return false;
  }

  return true;
};
