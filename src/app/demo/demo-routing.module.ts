import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DemoComponent }    from './demo.component';
import { DemoHomeComponent }    from './demo-home.component';

const routes: Routes = [
  {
    path: 'demo',
    component: DemoComponent,
    children: [
      {path: '', component: DemoHomeComponent}
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
export class DemoRoutingModule { }