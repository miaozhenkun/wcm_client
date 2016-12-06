import { Component, OnInit, Input,ViewChild} from '@angular/core';
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

  <div class="panel panel-default" *ngIf="!isLoadData && templateId&&doctorlist">



  <pagination [totalItems]="totalItems" [maxSize]="maxSize" [itemsPerPage]="itemsPerPage" [(ngModel)]="currentPage" 

[firstText]="firstText" [lastText]="lastText" [previousText]="previousText" [nextText]="nextText" [boundaryLinks]="true" [rotate]="false" 

(numPages)="numPages = $event" (pageChanged)="pageChanged($event)" class="pagination-sm" ></pagination>
</div>
  `
})
export class TemplateComponent implements OnInit, Input {
  public doctorlist: any;
  public errorMessage: any;
  
  
  //分页
  public maxSize:number = 10;
  public itemsPerPage:number=10;
  public totalItems:number = 200;
  public currentPage:number = 1;

  public firstText:string="首页";
  public lastText:string="尾页";
  public previousText:string="上一页";
  public nextText:string="下一页";   

  // 模板id
  @Input() templateId: string;
  // 文档列表
  docs: WCMDoc[];

  // 加载数据状态
  isLoadData: boolean;

  public constructor( private route: ActivatedRoute,private wcmWebsiteService:WcmWebsiteService) { 
 
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

  // 加载栏目数据
//loadDocs(){
//  if(!this.templateId){
//    return;
//  }
//  this.isLoadData = true;
//  setTimeout(() => {
//    this.isLoadData = false;
//  }, 500);
//
//}
//loaddata(){
//  
//  this.isLoadData = true;
//   this.wcmWebsiteService.getAppointDoctors()
//    .subscribe(
//      datas => this.doctorlist = datas,
//      setTimeout(() => {
//       this.isLoadData = false;
//     }, 0),
//      error =>  this.errorMessage = <any>error);
//       //console.dir(this.doctorlist);
//  
//  
//}
  

}
