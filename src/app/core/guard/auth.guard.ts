import {CanActivateFn} from '@angular/router';
import {inject} from "@angular/core";
import {AuthService} from "@core/services/auth.service";

export const authGuard: CanActivateFn = (route, state) => {
  return !!inject(AuthService).getToken();
};
