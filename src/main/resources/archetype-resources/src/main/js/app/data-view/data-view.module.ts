import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

import { FlexLayoutModule } from '@angular/flex-layout';

import { MatListModule } from '@angular/material/list';

import { DataListComponent } from './data-list/data-list.component';

@NgModule({
  declarations: [
    DataListComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule
  ],
  exports: [
    CommonModule,
    RouterModule,
    FlexLayoutModule,
    MatListModule,
    DataListComponent
  ]
})
export class DataViewModule { }
