import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { WCMChannel } from '../../model/WCMChannel'

/**
 * 模板列表组件
 */
@Component({
  selector: 'template-channel-list',
  template: `
  <div class="col-xs-3 placeholder">
    <util-loading [isShow]="isLoadData"></util-loading>
    <div *ngIf="!isLoadData">
      <button type="button" class="btn btn-info">
        <span class="glyphicon glyphicon-plus"></span> 新建模板
      </button>
  
      <ul class="list-group" *ngIf="!isLoadData">
        <li class="list-group-item"
          *ngFor="let templat of templats"
          [routerLink]="[templat.id]"
          [ngClass]="{active: templat.id === channelSelect ? channelSelect.id : null}"
          >{{templat.name}}
  
            <!-- 操作 -->
            <div class="btn-group website-handle">
              <button type="button" class="btn btn-default btn-xs dropdown-toggle" data-toggle="dropdown">
                <span class="glyphicon glyphicon-list"></span>
              </button>
              <ul class="dropdown-menu" role="menu">
                <li><a><span class="glyphicon glyphicon-pencil"></span> 编辑</a></li>
                <li><a><span class="glyphicon glyphicon-remove"></span> 删除</a></li>
                <li role="presentation" class="divider"></li>
                <li><a><span class="glyphicon glyphicon-eye-open"></span> 预览</a></li>
                <li><a><span class="glyphicon glyphicon-ok"></span> 发布</a></li>
              </ul>
            </div>
  
          </li>
      </ul>
    </div>
  </div>
  
  <div class="col-xs-9 placeholder">    
    <router-outlet></router-outlet>
  </div>
  
  `,
  styles:[`
    .list-group{margin-top: 10px;}
  `]
})
export class TemplateListComponent implements OnInit {
 
  // 站点id
  websiteId: string;

  // 模板列表
  templats: WCMChannel[];
  // 加载数据状态
  isLoadData: boolean;

  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  // 初始化
  ngOnInit() {
    this.isLoadData = false;
    
    let _this = this;
    
    this.route.params
      .subscribe(function(params){
        _this.websiteId = params['websiteId'];
        _this.loadChannels();
      });
    
  }

  // 加载模板数据
  loadChannels(){
    if(!this.websiteId){
      this.templats = [];
      return;
    }
    this.isLoadData = true;

    setTimeout(() => {
      this.templats = [
        {id: 1, parentId: null, websiteId: 1, name: '模板1', alias: 'channel1'},
        {id: 2, parentId: null, websiteId: 1, name: '模板2', alias: 'channel2'},
        {id: 3, parentId: null, websiteId: 1, name: '模板3', alias: 'channel3'},
        {id: 4, parentId: null, websiteId: 1, name: '模板4', alias: 'channel4'}
      ];

      this.isLoadData = false;

    }, 1000)

  }

}
