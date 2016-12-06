import { Injectable } from '@angular/core';

import { Observable } from 'rxjs/Observable';

@Injectable()
export class UserService {

  // 是否已登录
  isLoggedIn: boolean = false;

  // 登录之后重定向地址
  redirectUrl: string;

  login(loginParams: any): Observable<boolean> {
    return Observable.of(true).delay(1000).do(val => this.isLoggedIn = true);
  }

  logout(): void {
    this.isLoggedIn = false;
  }
}