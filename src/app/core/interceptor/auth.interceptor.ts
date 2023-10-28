import {inject, Injectable} from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor
} from '@angular/common/http';
import {EMPTY, Observable} from 'rxjs';
import {AuthService} from "@core/services/auth.service";
import {Router} from "@angular/router";
import {App} from "../../config/app";

@Injectable()
export class AuthInterceptor implements HttpInterceptor {

  private _authSrv = inject(AuthService);
  private _router = inject(Router);

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    if (request.url.endsWith('en.json') || request.url.endsWith('es.json')) {
      return next.handle(request);
    }

    const token = this._authSrv.getToken();

    if (token) {
      request = request.clone({
        setHeaders: {
          Authorization: `Bearer ${token}`
        }
      });
    } else {
      this._router.navigate([App.ROUTES.ACCESS_TOKEN]);
      return EMPTY;
    }

    return next.handle(request);
  }
}
