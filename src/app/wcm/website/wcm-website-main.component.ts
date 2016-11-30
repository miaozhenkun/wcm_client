import { Component, OnInit } from '@angular/core';

import { WCMWebsite } from '../model/WCMWebsite'
import { WCMChannel } from '../model/WCMChannel'

@Component({
  selector: 'websitemgr',
  template: `
    <div class="row">
      <ol class="breadcrumb" style="text-align: left;">
        <li></li>
        <li *ngIf="websiteSelect" class="active">{{websiteSelect.name}}</li>
        <li *ngIf="channelSelect" class="active">{{channelSelect.name}}</li>
      </ol>
    </div>
    <div class="row website-list">

      <!-- 站点列表 -->
      <div class="col-xs-1 placeholder">

        <button type="button" class="btn btn-success">
          <span class="glyphicon glyphicon-plus"></span> 新建站点
        </button>

        <div
          class="websit-list"
          *ngFor="let website of websites"
          [ngClass]="{active: website.id === websiteSelect.id}"
          >
          <img class="card-img-top" [src]="website.logo" alt="英雄杀">
          <div class="text" (click)="websitSelect(website)">
            <h4>{{website.name}}</h4>
            <p>{{website.desc}}</p>
          </div>

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

        </div>
      </div>

      <!-- 栏目列表 -->
      <div class="col-xs-3 placeholder">
        <website-channel-list
          [websiteId]='websiteSelect? websiteSelect.id: null'
          (onChannelSelect)="onChannelSelect($event)"
          ></website-channel-list>
      </div>

      <!-- 文档列表 -->
      <div class="col-xs-8 placeholder">
        <website-doc-list
          [channelId]='channelSelect? channelSelect.id : null'
          ></website-doc-list>
      </div>

    </div>
  `,
  styles: [`
    img{width: 100%;}
    .websit-list{position: relative; margin: 10px;}
    .websit-list .active .text{color: #337ab7;}
    .website-handle{position: absolute; right: 0px; top: 0px;}
  `]
})
export class WebsiteMainComponent implements OnInit {

  // 选中的站点
  websiteSelect: WCMWebsite;
  // 选中的栏目
  channelSelect: WCMChannel;

  // 站点列表
  websites: WCMWebsite[];

  constructor(
  ) { }

  // 初始化
  ngOnInit() {

    this.websites = [
      {id: 1, name: '站点1', alias: 'website1', describe: '站点2描述', logo: 'assets/imgs/heroes/yingxiongsha.jpg'},
      {id: 2, name: '站点2', alias: 'website2', describe: '站点2描述', logo: 'assets/imgs/heroes/lishimin.jpg'},
      {id: 3, name: '站点3', alias: 'website3', describe: '站点2描述', logo: 'assets/imgs/heroes/xiangyu.jpg'}
    ];

    if(this.websites.length > 0){
      this.websiteSelect = this.websites[0];
    }

  }

  // 站点选中
  websitSelect(website){
    this.websiteSelect = website;
    this.channelSelect = null;
  }

  // 栏目选中
  onChannelSelect(channel: WCMChannel){
    this.channelSelect =  channel;
  }

  // 新建站点
  addWebsite(){
    alert("开发中");
  }

}
