import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { TreeModule } from 'angular2-tree-component';
import { PaginationModule } from 'ng2-bootstrap/ng2-bootstrap';
import { ModalModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TooltipModule } from 'ng2-bootstrap/ng2-bootstrap';
import { TabsModule } from 'ng2-bootstrap/ng2-bootstrap';

import { UtilLoadingComponent } from './util-loading.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    HttpModule,
    
    TooltipModule,
    TreeModule,
    TabsModule,
    PaginationModule,
    ModalModule
  ],
  declarations: [
    UtilLoadingComponent
  ],
  exports: [
    CommonModule,
    FormsModule,
    HttpModule,
    
    TabsModule,
    TreeModule,
    PaginationModule,
    ModalModule,
    TooltipModule,

    UtilLoadingComponent
  ]
})
export class UtilModule { }
