import { Component, OnInit } from '@angular/core';

import { UserService} from './user.service'

// 登录组件
@Component({
  selector: 'user-login',
  template: `
    <form role="form">
      <div class="form-group">
        <label for="userName">用户名</label>
        <input type="text" class="form-control" id="userName"
          name="userName"
          required
          [(ngModel)]="loginParams.userName"
          placeholder="请输入用户名">
      </div>
      <div class="form-group">
        <label for="passWord">密码</label>
        <input type="password" class="form-control" id="passWord"
          name="passWord"
          required
          [(ngModel)]="loginParams.passWord"
          placeholder="请输入密码">
      </div>
      <div class="btn btn-default" (click)="login">登录</div>
    </form>
  `,
  styles: []
})
export class UserLoginComponent {

  // 登录参数
  private loginParams;

   constructor(private userService: UserService
  ) { }

  // 登录
  login(){
    this.userService.login(this.loginParams);
  }

}
