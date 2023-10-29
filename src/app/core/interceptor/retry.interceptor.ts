import {Injectable} from '@angular/core';
import {
  HttpInterceptor,
  HttpRequest,
  HttpHandler,
  HttpEvent,
} from '@angular/common/http';
import {Observable, retry, throwError, timer} from 'rxjs';

@Injectable()
export class RetryInterceptor implements HttpInterceptor {

  static readonly RETRY_FAIL = 2;
  static readonly MAX_RETRY_FAIL = 5;
  static readonly DELAY_RETRY_FAIL = 2000 // 2 seconds;
  static readonly STATUS_NOT_RETRY_FAIL = [401, 403];

  intercept(request: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    return next.handle(request).pipe(
      retry({
        count: RetryInterceptor.MAX_RETRY_FAIL,
        delay: (error, retryCount) =>
          retryCount >= RetryInterceptor.RETRY_FAIL || RetryInterceptor.STATUS_NOT_RETRY_FAIL.includes(error.status)
            ? throwError(() => error)
            : timer(RetryInterceptor.DELAY_RETRY_FAIL)
      })
    );
  }
}
