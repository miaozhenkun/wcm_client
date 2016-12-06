import { Component, OnInit, Input,ViewChild,ChangeDetectionStrategy} from '@angular/core';
import { ActivatedRoute, Params }   from '@angular/router';
//import { ModalDirective } from '../../../components/modal/modal.component';
import { WCMDoc } from '../../model/WCMDoc'
import { WcmWebsiteService } from '../../service/wcm-website.service'
/**
 * 文档列表组件
 */@Component({
  selector: 'website-doc-list',
  template: `
  <util-loading [isShow]="isLoadData"></util-loading>
  <div class="panel-heading" *ngIf="templateId">模板详情-{{templateId}}</div>
   <tabset>
   <tab heading="我是模板详情"><a href ="www.baidu.com">模板详情</a></tab>
    <tab *ngFor="let tabz of tabs"
         [heading]="tabz.title"
         [active]="tabz.active"
         (select)="tabz.active = true"
         (deselect)="tabz.active = false"
         [disabled]="tabz.disabled"
         [removable]="tabz.removable"
         (removed)="removeTabHandler(tabz)"
         [customClass]="tabz.customClass">
      {{tabz?.content}}
    </tab>
  </tabset>
 

  `
})
export class TemplateComponent implements OnInit, Input {
  public doctorlist: any;
  public errorMessage: any;

  // 模板id
  @Input() templateId: string;
  // 加载数据状态
  isLoadData: boolean;

  public constructor( private route: ActivatedRoute) { 
 
  }

  ngOnInit() {
    //TODO 根据栏目id加载文档列表
    
    let _this = this;
    
    this.route.params
      .subscribe(function(params){
        _this.templateId = params['templateId'];
       
        //_this.loaddata();
      });
   
  
  }

  // 输入变化
  ngOnChanges(changes) {
    // 栏目id发生变化
  if(changes.templateId){
    //this.loaddata();
  }
  }
  //设置当前页
  public setPage(pageNo:number):void {

  };
  //页面变化事件
  public pageChanged(event:any):void {
    console.log(event);
    //this.loaddata();
  };
  public tabs:Array<any> = [
    {title: '基本信息', content: 'Dynamic content 1' ,select:true},
    {title: '修订历史', content: 'Dynamic content 4', customClass: 'customClass'}
  ];
 
  public alertMe():void {
    setTimeout(function ():void {
      alert('You\'ve selected the alert tab!');
    });
  };
 
  public setActiveTab(index:number):void {
    this.tabs[index].active = true;
  };
 
  public removeTabHandler(/*tab:any*/):void {
    console.log('Remove Tab handler');
  };


  

}
