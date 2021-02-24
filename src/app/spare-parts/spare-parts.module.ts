import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TovarComponent } from './components/tovar/tovar.component';

@NgModule({
  declarations: [TovarComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SparePartsModule { }
