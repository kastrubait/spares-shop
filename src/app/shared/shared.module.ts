import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FiltersBlockComponent } from './components/filters-block/filters-block.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';

@NgModule({
  declarations: [OrderByPipe, FiltersBlockComponent, ChangeBackgroundDirective],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FiltersBlockComponent,
    OrderByPipe,
    ChangeBackgroundDirective
  ]
})
export class SharedModule { }
