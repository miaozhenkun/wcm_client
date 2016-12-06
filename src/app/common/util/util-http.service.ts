import { Injectable }     from '@angular/core';
import { Http,
         Request ,
         Response,
         RequestOptions,
         RequestOptionsArgs,
         RequestMethod,
         Headers,
         URLSearchParams } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

@Injectable()
export class UtilHttpService {

  private headers = new Headers(
    {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
    }
   );

  constructor (private http: Http) {}

  // 发送get请求
  get (
      url: string,// 请求地址
      params?: any// 请求参数
      ): Observable<any> {
    // 查询参数参数
    let paramsSrc = new URLSearchParams();
    paramsSrc.appendAll(params);
    // 请求参数配置
    let optionsSrc = new Request ({
      url: url,
      method: RequestMethod.Get,
      headers: this.headers,
      search: params
    });
    return this.http.request(optionsSrc)
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 发送post请求
  post (
      url: string,
      body: any,
      options?: RequestOptionsArgs): Observable<any> {
    return this.http.post(
        url,
        JSON.stringify(body),
        {headers: this.headers})
      .map(this.extractData)
      .catch(this.handleError);
  }

  // 结果处理
  private extractData(res: Response) {
    let body = res.json();
    return body.data || { };
  }

  // 处理错误
  private handleError (error: Response | any) {
    let errMsg: string;
    if (error instanceof Response) {
      const body = error.json() || '';
      const err = body.error || JSON.stringify(body);
      errMsg = `${error.status} - ${error.statusText || ''} ${err}`;
    } else {
      errMsg = error.message ? error.message : error.toString();
    }
    console.error(errMsg);
    return Observable.throw(errMsg);
  }

}
