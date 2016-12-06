import { NgModule} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';

import { WcmRoutingModule } from './wcm-routing.module'

import { UtilLoadingComponent } from '../common/util/util-loading.component';

import { WebsiteMainComponent } from './website/wcm-website-main.component';
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
    TooltipModule,
    TabsModule,
    ModalModule,
    FormsModule,
    HttpModule,
    WcmRoutingModule
  ],
  declarations: [
    UtilLoadingComponent,
    WebsiteMainComponent,
    ChannelListComponent,
    WritePostComponent,
    TemplateListComponent,
    TemplateComponent,
    DocListComponent
  ],
  providers: [
    WcmWebsiteService
  ]
})
export class WCMModule { 

}