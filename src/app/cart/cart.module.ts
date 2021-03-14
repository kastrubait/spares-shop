import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { CartComponent } from './components/cart/cart.component';
import { CartItemComponent } from './components/cart-item/cart-item.component';
import { ShowDeleteBtnDirective } from './directives/show-delete-btn.directive';

@NgModule({
  declarations: [CartComponent, CartItemComponent, ShowDeleteBtnDirective],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule
  ],
  exports: [
    CartComponent,
    CartItemComponent
  ]
})
export class CartModule { }
