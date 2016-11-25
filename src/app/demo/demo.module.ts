import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

import { DemoRoutingModule } from './demo-routing.module';
import { DemoHeroModule } from './hero/heroes.module';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
    DemoRoutingModule,
    DemoHeroModule
  ],
  declarations: [],
  providers: [
  ]
})
export class DemoModule { }