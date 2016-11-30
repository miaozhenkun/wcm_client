import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { HeroSanguoRoutingModule } from './heroes-sanguo-routing.module'

import { HeroSanguoComponent } from './hero-sanguo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HeroSanguoRoutingModule
  ],
  declarations: [
    HeroSanguoComponent
  ],
  providers: [
  ]
})
export class DemoHeroSanguoModule { }