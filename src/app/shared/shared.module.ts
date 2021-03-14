import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FiltersBlockComponent } from './components/filters-block/filters-block.component';

@NgModule({
  declarations: [OrderByPipe, FiltersBlockComponent],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FiltersBlockComponent,
    OrderByPipe
  ]
})
export class SharedModule { }
