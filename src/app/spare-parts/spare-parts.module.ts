import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModule } from '../shared/shared.module';
import { TovarComponent } from './components/tovar/tovar.component';
import { TovarListComponent } from './components/tovar-list/tovar-list.component';

@NgModule({
  declarations: [TovarComponent, TovarListComponent],
  imports: [
    CommonModule,
    SharedModule
  ]
})
export class SparePartsModule { }
