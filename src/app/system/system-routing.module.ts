import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { SystemMainComponent } from './system-main.component';

import { UserMgrComponent } from './user/user-mgr.component';

const routes: Routes = [
    {
      // 系统管理
      path: 'system', component: SystemMainComponent,
      children: [
        {path: '', redirectTo: 'usermgr' },
        // 用户管理
        {path: 'usermgr', component: UserMgrComponent }
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class SystemRoutingModule { }