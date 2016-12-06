import { Component, OnInit , Input, ViewChild } from '@angular/core';

// 系统管理-用户编辑组件
@Component({
  selector: 'user-mgr-edit',
  templateUrl: `
    <form class="form-horizontal" role="form" #pageForm="ngForm">

      <div class="form-group">
        <label class="col-sm-2 control-label">昵称</label>
        <div class="col-sm-10">
          <input class="form-control"
            required
            [(ngModel)]="user.userName"
            name="userName"
            #userName="ngModel"
            tooltip="昵称不能为空"
            tooltipPlacement="top"
            tooltipTrigger="mouseenter"
            [tooltipEnable]="!userName.valid"
            placeholder="请输入昵称"
            >
        </div>
      </div>

      <div class="form-group">
        <label class="col-sm-2 control-label">性别</label>
        <div class="col-sm-10">
          <label class="radio-inline">
            <input type="radio" name="sex" value="1"> 男
          </label>
          <label class="radio-inline">
            <input type="radio" name="sex" value="2"> 女
          </label>
        </div>
      </div>

      <div class="form-group">
        <div class="col-sm-offset-2 col-sm-10">
          <button class="btn btn-default"
            [disabled]="!pageForm.form.valid"
            (click)="save()">保存</button>
        </div>
      </div>
    </form>
  `,
  styles: [``]
})
export class UserMgrEditComponent implements OnInit{

  // 用户编辑对象
  @Input() user:any;

  // 表单对象
  @ViewChild('pageForm') pageForm;

  ngOnInit(){
    this.user = this.user || {};
  }

  // 提交
  save(){
    alert("保存");
  }

  // 重置表单
  reset(){
    this.pageForm.reset();
  }

}
