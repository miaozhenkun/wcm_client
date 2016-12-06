import { Component } from '@angular/core';

// 系统管理-主页面
@Component({
  selector: 'system-mgr',
  template: `
    <div class="row">
      <div class="col-xs-2 placeholder">
        <systemmgr-left-menu></systemmgr-left-menu>
      </div>
      <div class="col-xs-10 placeholder">
        <router-outlet></router-outlet>
      </div>
    </div>
  `,
  styles: [`

  `]
})
export class SystemMainComponent {



}
