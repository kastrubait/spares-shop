import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';

@NgModule({
  declarations: [OrderByPipe],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class SharedModule { }
