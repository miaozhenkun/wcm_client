import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { HeroSanguoRoutingModule } from './heroes-sanguo-routing.module'

import { HeroSanguoComponent } from './hero-sanguo.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    HeroSanguoRoutingModule
  ],
  declarations: [
    HeroSanguoComponent
  ],
  providers: [
  ]
})
export class DemoHeroSanguoModule { }