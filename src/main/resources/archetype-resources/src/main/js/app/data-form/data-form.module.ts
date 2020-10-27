import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { DataInputComponent } from './data-input/data-input.component';
import { DataFormViewComponent } from './data-form-view/data-form-view.component';



@NgModule({
  declarations: [
    DataInputComponent,
    DataFormViewComponent
  ],
  imports: [
    CommonModule,
    FormsModule
  ],
  exports: [
    DataInputComponent,
    DataFormViewComponent
  ]
})
export class DataFormModule { }
