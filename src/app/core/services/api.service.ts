import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders, HttpParams} from '@angular/common/http';
import {environment} from '@env';
import {Observable, throwError} from 'rxjs';
import {catchError, map} from "rxjs/operators";

// import {NotifyService} from "@shared/services/notify.service";

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(private http: HttpClient) {
  }

  /**
   * Para obtener un objeto
   *
   * @param resource url relativa del servicio
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un error
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public get(resource: string, params?: HttpParams | Object, blockUI: boolean = true, showError: boolean = true, observe: string = '',
             responseType: string = ''): Observable<any> {
    // @ts-ignore
    const httpParams = this._getHttpParams(params);

    return this.request('GET', resource, null, httpParams, blockUI, showError, observe, responseType);
  }

  /**
   * Para insertar un objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un error
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public post(resource: string, data?: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true, observe: string = '',
              responseType: string = ''): Observable<any> {
    return this.request('POST', resource, data, params, blockUI, showError, observe, responseType);
  }

  /**
   * Para actualizar un objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public put(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true, observe: string = '',
             responseType: string = ''): Observable<any> {
    return this.request('PUT', resource + data.id, data, params, blockUI, showError, observe, responseType);
  }

  /**
   *  Para parchear un objeto
   * @param resource url relativa del servicio
   * @param data objeto json que se va a parchear
   * @param params params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public patch(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true, observe: string = '',
               responseType: string = ''): Observable<any> {
    return this.request('PATCH', resource, data, params, blockUI, showError, observe, responseType);
  }

  /**
   * Para insertar o actualizar un objeto, el decide que peticion hacer en dependencia si tiene id el objeto
   *
   * @param resource url relativa del servicio
   * @param data objeto json que se va a insertar
   * @param params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public save(resource: string, data: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true, observe: string = '',
              responseType: string = ''): Observable<any> {
    if (data.id === undefined || data.id === null) {
      return this.request('POST', resource, data, params, blockUI, showError, observe, responseType);
    } else {
      const barra = resource.charAt(resource.length - 1) === '/' ? '' : '/';
      return this.request('PUT', resource + barra + data.id, data, params, blockUI, showError, observe, responseType);
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
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public delete(resource: string, data?: any, params?: HttpParams, blockUI: boolean = true, showError: boolean = true,
                observe: string = '',
                responseType: string = ''): Observable<any> {
    return this.request('DELETE', resource, data, params, blockUI, showError, observe, responseType);
  }

  /**
   * Para eliminar una lista de objetos
   *
   * @param resource url relativa del servicio
   * @param list lista de id que se van a eliminar
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  public deleteList(resource: string, list: any[], blockUI: boolean = true, showError: boolean = true, observe: string = '',
                    responseType: string = ''): Observable<any> {
    return this.request('POST', resource, list, undefined, blockUI, showError, observe, responseType);
  }

  /**
   *
   * @param method Tipo de peticion GET|POST|DELETE|PASH|PUT
   * @param resource url relativa del servici
   * @param data objeto json que se va a inserta
   * @param params parametros que se pasaran por la url por GET
   * @param blockUI mostrar el loading
   * @param showError mostrar lo sucediera un erro
   * @param observe observe
   * @param responseType responseType
   * @returns Observable<any>
   */
  private request(method: string, resource: string, data?: any, params?: HttpParams, blockUI: boolean = true,
                  showError: boolean = true, observe: string = '', responseType: string = ''): Observable<any> {

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

    if (observe) {
      options.observe = observe;
    }

    if (responseType) {
      options.responseType = responseType;
    }

    return this.http.request(method, url, options)
      .pipe(
        map((response) => {
          return response;
        }),
        catchError((err) => this.handleErrors(err, showError))
      );
  }

  private handleErrors(error: any, showError: boolean = true) {

    if (error.status === 500) {
      if (!environment.production) {
        const msg = error.error.error ? error.error.error.exception[0].message : error.statusText;
        this.showError(msg, showError);
      } else {
        const msg = error.error.msg ? error.error.msg : error.error.error ? error.error.error : error.statusText;
        this.showError(msg, showError);
      }
    } else {
      if (error.status === 401) {
        // this.authService.login();
      }

      if (error.status === 403 && error?.error.error == "Error during token introspection: The token does not exist or is not valid anymore") {
        // this.authService.logout();
      }

      if (error.status === 406 || error.status === 409) {
        // const msgW = error.error && error.error.message ? error.error.message : error.statusText;
        // this._notifySrv.warn(msgW);

        return throwError(error);
      }

      if (error.status === 423) {
        // const msgW = error.error && error.error.message ? error.error.message : error.statusText;
        // this._dialogSrv.info(`${msgW}<br>Su sesión será cerrada.`, {
        //   accept: () => this.authService.logout()
        // })

        return throwError(error);
      }

      const msg = error.error && error.error.message ? error.error.message : error.statusText;
      this.showError(msg, showError);
    }

    return throwError(error);
  }

  private showError(msg: any, show: boolean): void {
    if (show) {
      // this._notifySrv.error(msg);
    }
  }

  /**
   * Retorna los header para las peticiones
   *
   * @author Yosviel Dominguez <ydominguezg@uci.cu>
   * @returns HttpHeaders
   */
  private _getHeader(): HttpHeaders {
    return new HttpHeaders()
      .set('Access-Control-Allow-Origin', '*')
      .set('Content-Type', 'application/json')
      .set('Access-Control-Allow-Credentials', 'true')
      .set('Accept', 'application/json');
  }

  private _getHttpParams(data: Object | HttpParams) {
    // @ts-ignore
    if (data && !data instanceof HttpParams) {
      let params = new HttpParams();

      Object.keys(data).map(key => {
        // @ts-ignore
        params = params.set(key, data[key]);
      });

      return params;
    }

    return <(HttpParams)>data;
  }
}
