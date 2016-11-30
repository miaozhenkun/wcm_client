import { Component, OnInit, Input } from '@angular/core';

import { Website } from '../model/Website'

/**
 * 站点编辑组件
 */
@Component({
  selector: 'website-edit',
  template: `
  <div>
    <form role="form">
      <div class="form-group">
        <label>站点名称</label>
        <input type="text" class="form-control" placeholder="请输入站点名"
          [(ngModel)]='website.name'>
      </div>
      <div class="form-group">
        <label>站点别名</label>
        <input type="text" class="form-control" placeholder="请输入站点别名"
          [(ngModel)]='website.alias'>
      </div>
      <div class="form-group">
        <label>站点描述</label>
        <input type="text" class="form-control" placeholder="请输入站点描述"
          [(ngModel)]='website.describe'>
      </div>
      <button type="submit" class="btn btn-default" (click)="save">保存</button>
    </form>
  </div>
  `
})
export class WebsiteEditComponent implements OnInit {

  @Input() website: Website;

  constructor(
  ) { }

  ngOnInit() {
  }

  save(): void {
    alert("保存站点");
  }

}
