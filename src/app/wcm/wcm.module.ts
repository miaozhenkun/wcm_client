import { NgModule } from '@angular/core';

import { UtilModule } from '../common/util/util.module';
import { WcmRoutingModule } from './wcm-routing.module'

import { WebsiteMainComponent } from './website/wcm-website-main.component';
import { ChannelListComponent } from './website/channel/channel-list.component';
import { TemplateListComponent } from './website/template/template-list.component'
import { DocListComponent } from './website/doc/doc-list.component';

import { WcmWebsiteService } from './service/wcm-website.service'

@NgModule({
  imports: [
    UtilModule,
    WcmRoutingModule
  ],
  declarations: [
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