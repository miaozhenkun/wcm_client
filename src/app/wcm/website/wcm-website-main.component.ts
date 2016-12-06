import { Component, OnInit  } from '@angular/core';
import { Router, ActivatedRoute, Params }   from '@angular/router';
import { Http, Response } from '@angular/http';
import { Observable }     from 'rxjs/Observable';

import { WcmWebsiteService } from '../service/wcm-website.service'

import { WCMWebsite } from '../model/WCMWebsite'
import { WCMChannel } from '../model/WCMChannel'
import { AddWebsiteContent } from './wcm-website-add.component'

@Component({
  selector: 'websitemgr',
  template: `
    <div class="row">
      <ol class="breadcrumb" style="text-align: left;">
        <li></li>
        <li *ngIf="websiteSelect" class="active">{{websiteSelect.name}}</li>
        <li *ngIf="channelSelect" class="active">{{channelSelect.name}}</li>
      </ol>

      <span *ngIf="errorMessage" color="red">{{errorMessage}}</span>

    </div>
    <div class="row website-list">

      <!-- 站点列表 -->
      <div class="col-xs-1 placeholder">

        <button type="button" class="btn btn-success" (click)="showAddWebsite()">
          <span class="glyphicon glyphicon-plus"></span> 新建站点
        </button>


        <div
          class="websit-list"
          *ngFor="let website of websites"
          [ngClass]="{active: website.id === websiteSelect.id}"
          (click)='clickWebsite(website)'
          >
          <img class="img-rounded" width='50px' height='50px' [src]="website.logo" alt="英雄杀">
          <div class="text"
            [routerLink]="['/website', website.id]">
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
      
      <!-- 右侧部分 -->
      <div class="col-xs-11 placeholder">
        <div class="row" *ngIf="websiteSelect">
          <a [routerLink]="[websiteSelect.id, 'channel']">栏目管理</a>
          <a [routerLink]="[websiteSelect.id, 'template']">模板管理</a>
        </div>
        <div class="row">
          <router-outlet></router-outlet>
        </div>
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
  websiteSelect: any;
  // 选中的栏目
  channelSelect: WCMChannel;

  // 站点列表
  websites: WCMWebsite[];
  
  websitesName: any;

  constructor(
    private wcmWebsiteService: WcmWebsiteService,
    private route: ActivatedRoute,
    private router: Router,
    private http: Http
  ) {}

  // 初始化
  ngOnInit() {

    this.websites = [
      {id: 1, name: '站点1', alias: 'website1', describe: '站点2描述', logo: 'assets/imgs/heroes/yingxiongsha.jpg'},
      {id: 2, name: '站点2', alias: 'website2', describe: '站点2描述', logo: 'assets/imgs/heroes/lishimin.jpg'},
      {id: 3, name: '站点3', alias: 'website3', describe: '站点2描述', logo: 'assets/imgs/heroes/xiangyu.jpg'}
    ];

    
    let _this = this;
    
    this.route.params
      .subscribe(function(params){
        console.dir(1);
        if(_this.websites.length > 0){
          _this.websiteSelect = _this.websites[0];
          _this.router.navigate(['website', _this.websiteSelect.id]);
        }
      });
   
		this.getWebsitesList();
  }
  
  //获取站点
  getWebsitesList(): Observable<any> {
  	let url="http://192.168.1.252:9301/wjwmb/api/standardsearch/list";
  	console.info("start");
    return this.http.get(url)
                    .map((res: Response)=>this.websitesName=res.json());
  }
  
  
  public showAddWebsite():void{

  }
  

  clickWebsite(website:WCMWebsite):void{
  	this.websiteSelect=website;
  }

  // 新建站点
  addWebsite(){
    alert("开发中");
  }

}
