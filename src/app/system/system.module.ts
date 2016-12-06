import { NgModule } from '@angular/core';

import { UtilModule } from '../common/util/util.module';
import { SystemRoutingModule } from './system-routing.module';

import { LeftMenuComponent } from './leftmenu.component';
import { SystemMainComponent } from './system-main.component';

import { UserMgrComponent } from './user/user-mgr.component';
import { UserMgrEditComponent } from './user/user-mgr-edit.component';

@NgModule({
  imports: [
    UtilModule,
    SystemRoutingModule
  ],
  declarations: [
    LeftMenuComponent,
    SystemMainComponent,

    UserMgrComponent,
    UserMgrEditComponent
  ],
  providers: [

  ]
})
export class SystemModule { }