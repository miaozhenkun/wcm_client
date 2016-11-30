import { Component, OnInit, OnChanges, Input, Output, EventEmitter } from '@angular/core';

import { WCMChannel } from '../../model/WCMChannel'

/**
 * 栏目列表组件
 */
@Component({
  selector: 'website-channel-list',
  template: `
  <util-loading [isShow]="isLoadData"></util-loading>
  <div *ngIf="!isLoadData">
    <button type="button" class="btn btn-info">
      <span class="glyphicon glyphicon-plus"></span> 新建栏目
    </button>

    <ul class="list-group" *ngIf="!isLoadData">
      <li class="list-group-item"
        *ngFor="let channel of channels"
        (click)="selectChannel(channel)"
        [ngClass]="{active: channel.id === channelSelect.id}"
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
  `,
  styles:[`
    .list-group{margin-top: 10px;}
  `]
})
export class ChannelListComponent implements OnInit, OnChanges {

  // 站点id
  @Input() websiteId: string;

  // 栏目选择
  @Output() onChannelSelect = new EventEmitter<boolean>();

  // 栏目列表
  channels: WCMChannel[];
  // 选中的栏目
  channelSelect: WCMChannel;
  // 加载数据状态
  isLoadData: boolean;

  constructor(
  ) { }

  // 初始化
  ngOnInit() {
    this.isLoadData = false;
  }

  // 输入变化
  ngOnChanges(changes) {
    // 站点id发生变化
    if(changes.websiteId){
      this.loadChannels();
    }
  }

  // 选择栏目
  selectChannel(channel){
    this.onChannelSelect.emit(channel);
    this.channelSelect = channel;
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
      if(this.channels.length > 0){
        this.selectChannel(this.channels[0]);
      }

      this.isLoadData = false;

    }, 1000)

  }

}
