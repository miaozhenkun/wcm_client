import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { WcmRoutingModule } from './wcm-routing.module'

import { UtilLoadingComponent } from '../common/util/util-loading.component';

import { WebsiteMainComponent } from './website/wcm-website-main.component';
import { ChannelListComponent } from './website/channel/channel-list.component';
import { TemplateListComponent } from './website/template/template-list.component'
import { DocListComponent } from './website/doc/doc-list.component';

import { WcmWebsiteService } from './service/wcm-website.service'

@NgModule({
  imports: [
    CommonModule,
    PaginationModule,
    FormsModule,
    HttpModule,
    WcmRoutingModule
  ],
  declarations: [
    UtilLoadingComponent,
    WebsiteMainComponent,
    ChannelListComponent,
    TemplateListComponent,
    DocListComponent
  ],
  providers: [
    WcmWebsiteService
  ]
})
export class WCMModule { }