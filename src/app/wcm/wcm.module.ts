import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { TreeModule } from 'angular2-tree-component';

import { PaginationModule, ModalModule } from 'ng2-bootstrap/ng2-bootstrap';

import { WcmRoutingModule } from './wcm-routing.module'

import { UtilLoadingComponent } from '../common/util/util-loading.component';

import { WebsiteMainComponent } from './website/wcm-website-main.component';
import { AddWebsiteContent } from './website/wcm-website-add.component';
import { ChannelListComponent } from './website/channel/channel-list.component';
import { TemplateListComponent } from './website/template/template-list.component'
import { TemplateComponent } from './website/template/template-degtail.component'

import { DocListComponent } from './website/doc/doc-list.component';

import { WritePostComponent } from './website/write-post/write-post.component'

import { WcmWebsiteService } from './service/wcm-website.service'


@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    ModalModule,
    FormsModule,
    TreeModule,
    HttpModule,
    WcmRoutingModule
  ],
  declarations: [
    UtilLoadingComponent,
    WebsiteMainComponent,
    ChannelListComponent,
    WritePostComponent,
    TemplateListComponent,
    DocListComponent,
    AddWebsiteContent,
    TemplateComponent

  ],
  providers: [
    WcmWebsiteService
  ]
})
export class WCMModule { 

}