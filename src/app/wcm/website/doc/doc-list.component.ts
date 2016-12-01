import { Component, OnInit, Input } from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';

import { WCMDoc } from '../../model/WCMDoc'

/**
 * 文档列表组件
 */
@Component({
  selector: 'website-doc-list',
  template: `
  <util-loading [isShow]="isLoadData"></util-loading>
  <div class="panel panel-default" *ngIf="!isLoadData && channelId">
    <div class="panel-heading">文档列表-{{channelId}}</div>

    <table class="table table-striped">
      <tr>
        <td>标题</td>
        <td>时间</td>
      </tr>
      <tr *ngFor="let doc of docs">
        <td>{{doc.title}}</td>
        <td>{{doc.createTime}}</td>
      </tr>
    </table>
  </div>
  `
})
export class DocListComponent implements OnInit {

  // 栏目id
  @Input() channelId: string;

  // 文档列表
  docs: WCMDoc[];

  // 加载数据状态
  isLoadData: boolean;

  constructor(
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    //TODO 根据栏目id加载文档列表
    
    let _this = this;
    
    this.route.params
      .subscribe(function(params){
        _this.channelId = params['channelId'];
        _this.loadDocs();
      });
  }

  // 输入变化
  ngOnChanges(changes) {
    // 栏目id发生变化
    if(changes.channelId){
      this.loadDocs();
    }
  }

  // 加载栏目数据
  loadDocs(){
    if(!this.channelId){
      this.docs = [];
      return;
    }
    this.isLoadData = true;
    setTimeout(() => {
      this.docs = [
        {id: 1, channelId: null, websiteId: null, title: '文档标题1', createTime: '-'},
        {id: 2, channelId: null, websiteId: null, title: '文档标题2', createTime: '-'},
        {id: 3, channelId: null, websiteId: null, title: '文档标题3', createTime: '-'},
        {id: 4, channelId: null, websiteId: null, title: '文档标题4', createTime: '-'},
        {id: 5, channelId: null, websiteId: null, title: '文档标题5', createTime: '-'},
        {id: 6, channelId: null, websiteId: null, title: '文档标题6', createTime: '-'}
      ];
      this.isLoadData = false;
    }, 1000)

  }

}
