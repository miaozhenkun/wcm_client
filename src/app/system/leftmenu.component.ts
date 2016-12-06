import { Component } from '@angular/core';

// 系统管理-左侧菜单组件
@Component({
  selector: 'systemmgr-left-menu',
  template: `
    <ul class="list-group">
      <li class="list-group-item" routerLink="usermgr">用户管理</li>
    </ul>
  `,
  styles: [`

  `]
})
export class LeftMenuComponent {

}
