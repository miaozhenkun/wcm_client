import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent }    from './demo.component';
import { DemoHomeComponent }    from './demo-home.component';

import {RepoBrowser} from './github/repo-browser/repo-browser';

import {RepoList} from './github/repo-list/repo-list';
import {RepoDetail} from './github/repo-detail/repo-detail';

const routes: Routes = [
  {
    path: '',
    redirectTo: '/demo',
    pathMatch: 'full'
  },
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {
        path: '',
        component: DemoHomeComponent
      }
    ]
  },
    {
    path: 'demo/github',
    component: RepoBrowser,
    children: [
      {path: '', component: RepoList},
      {path: ':org', component: RepoList,
        children: [
          {path: '', component: RepoDetail},
          {path: ':repo', component: RepoDetail}
        ]
      }]
  }
  
  
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  declarations: [
    DemoComponent,
    RepoBrowser,
    RepoList,
    RepoDetail,
    DemoHomeComponent,
  ],
  exports: [
    RouterModule
  ]
})
export class DemoRoutingModule { }