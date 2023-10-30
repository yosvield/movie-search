import {inject, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '@env';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";
import {NotifyService} from "@core/services/notify.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  private _http = inject(HttpClient);
  private _notifySrv = inject(NotifyService);

  /**
   * Para obtener un objeto
   *
   * @param resource url relativa del servicio
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un error
   * @returns Observable<any>
   */
  public get(resource: string, params?: HttpParams | Object, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    const httpParams = this._getHttpParams(params);

    return this.request('GET', resource, null, httpParams, blockUI, showError);
  }

  /**
   * Para insertar un objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un error
   * @returns Observable<any>
   */
  public post(resource: string, data?: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    return this.request('POST', resource, data, params, blockUI, showError);
  }

  /**
   * Para actualizar un objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @returns Observable<any>
   */
  public put(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    return this.request('PUT', resource + data.id, data, params, blockUI, showError);
  }

  /**
   *  Para parchear un objeto
   * @param resource url relativa del servicio
   * @param data objeto json que se va a parchear
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @returns Observable<any>
   */
  public patch(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    return this.request('PATCH', resource, data, params, blockUI, showError);
  }

  /**
   * Para insertar o actualizar un objeto, el decide que peticion hacer en dependencia si tiene id el objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @returns Observable<any>
   */
  public save(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    if (data.id === undefined || data.id === null) {
      return this.request('POST', resource, data, params, blockUI, showError);
    } else {
      const barra = resource.charAt(resource.length - 1) === '/' ? '' : '/';
      return this.request('PUT', resource + barra + data.id, data, params, blockUI, showError);
    }
  }

  /**
   * Para eliminar un objeto
   *
   * @param resource url relativa del servicio
   * @param data data
   * @param params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @returns Observable<any>
   */
  public delete(resource: string, data?: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {
    return this.request('DELETE', resource, data, params, blockUI, showError);
  }

  /**
   *
   * @param method Tipo de peticion GET|POST|DELETE|PASH|PUT
   * @param resource url relativa del servici
   * @param data objeto json que se va a inserta
   * @param params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @returns Observable<any>
   */
  private request(method: string, resource: string, data?: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true): Observable<any> {

    const url = `${environment.apiUrl}${resource}`;

    let options: any = {
      headers: this._getHeader()
    };

    if (blockUI) {
      options = {
        headers: options.headers.set('blockUI', 'true')
      };
    }

    if (data) {
      options.body = data;
    }

    if (params) {
      options.params = params;
    }

    return this._http.request(method, url, options)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => this.handleErrors(err, showError))
      );
  }

  private handleErrors(error: any, showError: boolean = true) {

    if (showError) {
      this._notifySrv.error(error.error.status_message);
    }

    return throwError(() => error);
  }

  /**
   * Retorna los header para las peticiones
   *
   * @author Yosviel Dominguez <yosvield@gmail.com>
   * @returns HttpHeaders
   */
  private _getHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
      .set('Accept', 'application/json');
  }

  private _getHttpParams(data: Object | HttpParams) {
    // @ts-ignore
    if (data && !data instanceof HttpParams) {
      let params = new HttpParams();

      Object.keys(data).map(key => {
        params = params.set(key, data[key]);
      });

      return params;
    }

    return <(HttpParams)>data;
  }
}
