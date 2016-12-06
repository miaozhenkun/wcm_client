import { Component, ViewChild } from '@angular/core';

import { UserService } from '../service/user.service'

import { ModalDirective } from 'ng2-bootstrap/components/modal/modal.component';

// 系统管理-用户管理组件
@Component({
  selector: 'systemmgr-usermgr',
  templateUrl: './user-mgr.component.html',
  styles: [``]
})
export class UserMgrComponent {

  // 用户编辑对象
  private user:any;

  // 用户列表
  private userList:any;

  // 查询参数
  private searchParams:any;

  // 用户编辑modal
  @ViewChild('userEditModal') public userEditModal:ModalDirective;

  constructor(private userService: UserService){

  }

  // 刷新列表数据
  refreshList() {
    this.userService.getUserList(this.searchParams)
      .subscribe(data=>this.userList=data);
  }

}
