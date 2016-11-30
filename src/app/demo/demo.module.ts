import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoHeroModule } from './hero/heroes.module';
import { DemoHeroSanguoModule } from './hero-sanguo/heroes-sanguo.module';

import { DemoComponent }    from './demo.component';
import { DemoHomeComponent }    from './demo-home.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    DemoRoutingModule,
    DemoHeroModule,
    DemoHeroSanguoModule
  ],
  declarations: [
    DemoComponent,
    DemoHomeComponent
  ],
  providers: [
  ]
})
export class DemoModule { }