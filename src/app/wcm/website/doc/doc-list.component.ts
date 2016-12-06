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
  <div class="panel-heading" *ngIf="channelId">文档列表-{{channelId}}</div>
    
    
    
    
    <button type="button" class="btn btn-primary" data-toggle="modal" data-target="#myModal" *ngIf="channelId">
    发表文档
    </button>
  <div class="panel panel-default" *ngIf="!isLoadData && channelId&&doctorlist">
    <div class="input-group">
                    <input class="form-control" type="text" placeholder="搜索" [(ngModel)]="searchText" (keyup)="searchChanged($event)" id="searchText" name="searchText">
                    <span class="input-group-btn">
                        <button class="btn btn-default" type="button"><i class="fa fa-search" aria-hidden="true" ></i> 搜索</button>
                    </span>
    </div>
    <table class="table table-striped">
      <tr>
       
        <td>文档详情</td>
       
      </tr>
      <tr
        *ngFor="let doc of doctorlist.data.doctors">
        <td>
           <p>
                   <a class="input">{{doc.hosOrgName}} </a>
                   &nbsp;&nbsp;{{doc.name}}
                   &nbsp;&nbsp;{{doc.occuRange}}
                   &nbsp;&nbsp;&nbsp;&nbsp;{{doc.createtime}} 
                   &nbsp;&nbsp;&nbsp;&nbsp;<i class="fa fa-eye" aria-hidden="true"></i>&nbsp;{{doc.genderDn}} 
                    
          </p>
        </td>
      </tr>
    </table>

  <pagination [totalItems]="totalItems" [maxSize]="maxSize" [itemsPerPage]="itemsPerPage" [(ngModel)]="currentPage" 

[firstText]="firstText" [lastText]="lastText" [previousText]="previousText" [nextText]="nextText" [boundaryLinks]="true" [rotate]="false" 

(numPages)="numPages = $event" (pageChanged)="pageChanged($event)" class="pagination-sm" ></pagination>
<!-- Modal -->
<div class="modal fade" id="myModal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">
  
    <div class="modal-content">
     <app-write-post></app-write-post>
       <div class="modal-footer">
       
        <button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>
        <button type="button" class="btn btn-primary">提交</button>
      
    </div>
    
  </div>

</div>
  `
})
export class DocListComponent implements OnInit, Input {
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

  // 栏目id
  @Input() channelId: string;

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
        _this.channelId = params['channelId'];
       
        _this.loaddata();
      });
   
  
  }

  // 输入变化
  ngOnChanges(changes) {
    // 栏目id发生变化
  if(changes.channelId){
    this.loaddata();
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
  loadDocs(){
    if(!this.channelId){
      return;
    }
    this.isLoadData = true;
    setTimeout(() => {
      this.isLoadData = false;
    }, 500);

  }
  loaddata(){
    
    this.isLoadData = true;
     this.wcmWebsiteService.getAppointDoctors()
      .subscribe(
        datas => this.doctorlist = datas,
        setTimeout(() => {
         this.isLoadData = false;
       }, 0),
        error =>  this.errorMessage = <any>error);
         //console.dir(this.doctorlist);
    
    
  }
  

}
