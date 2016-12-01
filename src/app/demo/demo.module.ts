import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NgbModule} from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { DemoRoutingModule } from './demo-routing.module';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { DemoHeroModule } from './hero/heroes.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    NgbModule.forRoot(),
     PaginationModule,
    DemoRoutingModule,
    DemoHeroModule

  ],
  declarations: [],
  providers: [
  ]
})
export class DemoModule { }