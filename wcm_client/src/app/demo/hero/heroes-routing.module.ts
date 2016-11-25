import { NgModule }             from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HeroComponent } from './hero.component';
import { DemoHeroListComponent }    from './demo-hero-list/demo-hero-list.component';
import { DemoHeroDetailComponent }  from './demo-hero-detail/demo-hero-detail.component';
import { DemoHeroIndexComponent }   from './demo-hero-index/demo-hero-index.component';

const heroesRoutes: Routes = [
  {
    path: '',
    redirectTo: 'demo/hero',
    pathMatch: 'full'
  },
  {
    path: 'demo/hero',
    component: HeroComponent,
    children: [
      { path: '', component: DemoHeroIndexComponent },
      { path: 'list', component: DemoHeroListComponent },
      { path: 'detail/:id', component: DemoHeroDetailComponent }
    ]
  }
];

@NgModule({
  imports: [
    RouterModule.forChild(heroesRoutes)
  ],
  exports: [
    RouterModule
  ]
})
export class HeroRoutingModule { }