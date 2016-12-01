import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { SitestatComponent } from './sitestat/sitestat.component';

import {AddCommentComponent} from './add-comment/add-comment.component';
import { HeroRoutingModule } from './heroes-routing.module';
import {WritePostComponent} from './write-post/write-post.component'

import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { HeroComponent } from './hero.component';
import { DemoHeroListComponent } from './demo-hero-list/demo-hero-list.component';
import { DemoHeroDetailComponent } from './demo-hero-detail/demo-hero-detail.component';
import { DemoHeroIndexComponent } from './demo-hero-index/demo-hero-index.component';

import { DemoHeroService } from './service/demo-hero.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
     PaginationModule,
    NgbModule.forRoot(),
    HeroRoutingModule
  ],
  declarations: [
    HeroComponent,
    DemoHeroListComponent, 
    SitestatComponent,
    AddCommentComponent,
    WritePostComponent,
    DemoHeroDetailComponent,
    DemoHeroIndexComponent,
  ],
  providers: [
    DemoHeroService
  ]
})
export class DemoHeroModule { }