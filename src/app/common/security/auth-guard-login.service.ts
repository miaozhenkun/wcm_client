import { Injectable }       from '@angular/core';
import {
  CanActivate, CanActivateChild , Router,
  ActivatedRouteSnapshot,
  RouterStateSnapshot
}                           from '@angular/router';
import { UserService }      from './user.service';

// 路由守卫-登录
@Injectable()
export class AuthGuardLogin implements CanActivate, CanActivateChild {
  constructor(private authService: UserService, private router: Router) {}

  // 是否能激活
  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    let url: string = state.url;
    return this.checkLogin(url);
  }

  // 子路由是否能激活
  canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    return this.canActivate(route, state);
  }

  // 检测是否登录
  checkLogin(url: string): boolean {
    if (this.authService.isLoggedIn) { return true; }

    // 储存跳转登录之前地址
    this.authService.redirectUrl = url;

    // 跳转登录
    this.router.navigate(['/login']);
    return false;
  }
}