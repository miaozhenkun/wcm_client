import { NgModule }                 from '@angular/core';
import { RouterModule, Routes }     from '@angular/router';

import { HomeComponent }            from './common/home/home.component';
import { PageNotFoundComponent }    from './common/page-not-found/page-not-found.component';

// 路由
const appRoutes: Routes = [
  { path: '', component: HomeComponent }
  //{ path: '**', component: PageNotFoundComponent }
];

@NgModule({
  imports: [
    RouterModule.forRoot(appRoutes)
  ],
  declarations: [
  	HomeComponent,
  	PageNotFoundComponent
  ],
  exports: [
    RouterModule
  ]
})
export class AppRoutingModule {}