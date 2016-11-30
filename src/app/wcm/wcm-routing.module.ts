import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { WebsiteMainComponent }     from './website/wcm-website-main.component';
import { ChannelListComponent } from './website/channel/channel-list.component'

const routes: Routes = [
    {
      path: '',
      component: WebsiteMainComponent
    },
    {
      // 站点管理
      path: 'website',
      component: WebsiteMainComponent,
      children: [
        {
          path: ':websiteId',
          component: ChannelListComponent,
          children: [
            {
              path: ':channelId',
              component: WebsiteMainComponent
            }
          ]
        }
      ]
    }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
  ],
  exports: [
    RouterModule
  ]
})
export class WcmRoutingModule { }