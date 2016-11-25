import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DemoComponent }            from '../demo.component';

import { HeroSanguoComponent }      from './hero-sanguo.component';

const routes: Routes = [
    {
      path: 'demo',
      component: DemoComponent,
      children: [
        {
          path: 'hero-sanguo',
          component: HeroSanguoComponent,
          children: [
            { path: '', component: HeroSanguoComponent }
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
export class HeroSanguoRoutingModule { }