import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { AuthGuardLogin }                from './common/security/auth-guard-login.service';

import { UserLoginComponent }            from './common/security/user-login.component';
import { HomeComponent }            from './common/home/home.component';
import { PageNotFoundComponent }    from './common/page-not-found/page-not-found.component';

// 路由
const appRoutes: Routes = [
  // 登录
  { path: 'login', component: UserLoginComponent},
  // 首页
  { path: '', component: HomeComponent, canActivateChild: [AuthGuardLogin] }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}