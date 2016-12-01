import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { WebsiteMainComponent }     from './website/wcm-website-main.component';
import { ChannelListComponent } from './website/channel/channel-list.component';
import { TemplateListComponent } from './website/template/template-list.component';
import { DocListComponent } from './website/doc/doc-list.component';


const routes: Routes = [
    {path: '', component: WebsiteMainComponent},
    {
      // 站点管理
      path: 'website', component: WebsiteMainComponent,
      children: [
        {
          // 站点管理
          path: ':websiteId',
          children: [
            {path: '',  redirectTo: 'channel', pathMatch: 'full'},
            {
              path: 'channel', component: ChannelListComponent,
              children: [
                {path: ':channelId', component: DocListComponent}
              ]
            },
            {path: 'template', component: TemplateListComponent}
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