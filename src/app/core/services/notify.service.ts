import {Injectable} from '@angular/core';
import {IndividualConfig, ToastrService} from "ngx-toastr";
import {TranslateService} from "@ngx-translate/core";

@Injectable({
  providedIn: 'root'
})
export class NotifyService {

  constructor(private _toastr: ToastrService,
              public _translateSrv: TranslateService) {
  }

  success(message: string, params?: any, title?: string, options?: Partial<IndividualConfig>) {
    this._toastr.success(this._translateSrv.instant(message, params), title, options);
  }

  error(message: string, params?: any, title?: string, options?: Partial<IndividualConfig>) {
    this._toastr.error(this._translateSrv.instant(message, params), title, options);
  }

  info(message: string, params?: any, title?: string, options?: Partial<IndividualConfig>) {
    this._toastr.info(this._translateSrv.instant(message, params), title, options);
  }

  warn(message: string, params?: any, title?: string, options?: Partial<IndividualConfig>) {
    return this._toastr.warning(this._translateSrv.instant(message, params), title, options);
  }

  clear(toastId?: number) {
    this._toastr.clear(toastId);
  }
}
