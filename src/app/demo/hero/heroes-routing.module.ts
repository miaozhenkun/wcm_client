import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { DemoComponent }            from '../demo.component';

import { HeroComponent }            from './hero.component';
import { DemoHeroListComponent }    from './demo-hero-list/demo-hero-list.component';
import { DemoHeroDetailComponent }  from './demo-hero-detail/demo-hero-detail.component';
import { DemoHeroIndexComponent }   from './demo-hero-index/demo-hero-index.component';

const routes: Routes = [
    {
      path: 'demo',
      component: DemoComponent,
      children: [
        {
          path: 'hero',
          component: HeroComponent,
          children: [
            { path: '', component: DemoHeroIndexComponent },
            { path: 'list', component: DemoHeroListComponent },
            { path: 'detail/:id', component: DemoHeroDetailComponent }
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
export class DemoHeroRoutingModule { }