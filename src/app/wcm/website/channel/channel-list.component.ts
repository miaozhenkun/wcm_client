import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';

import { WCMChannel } from '../../model/WCMChannel'

/**
 * 栏目列表组件
 */
@Component({
  selector: 'website-channel-list',
  template: `
  <div class="col-xs-3 placeholder">
    <util-loading [isShow]="isLoadData"></util-loading>
    <div *ngIf="!isLoadData">
      <button type="button" class="btn btn-info">
        <span class="glyphicon glyphicon-plus"></span> 新建栏目
      </button>
  
      <ul class="list-group" *ngIf="!isLoadData">
        <li class="list-group-item"
          *ngFor="let channel of channels"
          [routerLink]="[channel.id]"
          [ngClass]="{active: channel.id === channelSelect ? channelSelect.id : null}"
          >{{channel.name}}
  
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
    <Tree [nodes]="nodes"></Tree>
  </div>
  
  <div class="col-xs-9 placeholder">
    <router-outlet></router-outlet>
  </div>
  
  `,
  styles:[`
    .list-group{margin-top: 10px;}
  `]
})
export class ChannelListComponent implements OnInit {

  // 站点id
  websiteId: string;

  // 栏目列表
  channels: WCMChannel[];
  // 选中的栏目
  channelSelect: WCMChannel;
  // 加载数据状态
  isLoadData: boolean;
  
  nodes = [
    {
      id: 1,
      name: 'root1',
      children: [
        { id: 2, name: 'child1' },
        { id: 3, name: 'child2' }
      ]
    },
    {
      id: 4,
      name: 'root2',
      children: [
        { id: 5, name: 'child2.1' },
        {
          id: 6,
          name: 'child2.2',
          children: [
            { id: 7, name: 'subsub' }
          ]
        }
      ]
    }
  ];

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

  // 加载栏目数据
  loadChannels(){
    if(!this.websiteId){
      this.channels = [];
      return;
    }
    this.isLoadData = true;

    setTimeout(() => {
      this.channels = [
        {id: 1, parentId: null, websiteId: 1, name: '栏目1', alias: 'channel1'},
        {id: 2, parentId: null, websiteId: 1, name: '栏目2', alias: 'channel2'},
        {id: 3, parentId: null, websiteId: 1, name: '栏目3', alias: 'channel3'},
        {id: 4, parentId: null, websiteId: 1, name: '栏目4', alias: 'channel4'}
      ];

      this.isLoadData = false;

    }, 1000)

  }

}
