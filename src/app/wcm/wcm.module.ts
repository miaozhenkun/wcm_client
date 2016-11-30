import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { WcmRoutingModule } from './wcm-routing.module'

import { UtilLoadingComponent } from '../common/util/util-loading.component';

import { WebsiteMainComponent } from './website/wcm-website-main.component';
import { ChannelListComponent } from './website/channel/channel-list.component'
import { DocListComponent } from './website/doc/doc-list.component'

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    WcmRoutingModule
  ],
  declarations: [
    UtilLoadingComponent,
    WebsiteMainComponent,
    ChannelListComponent,
    DocListComponent
  ],
  providers: [
  ]
})
export class WCMModule { }