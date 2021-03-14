import { Component, Input } from '@angular/core';
import { ITovar } from 'src/app/spare-parts/models/tovar.model';

import { ITotalCart } from "../../models/total-card.model";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() total!: ITotalCart;

  constructor(
    private cartService: CartService
  ) {}

  decreaseQuantity(tovar: ITovar): void {
    this.cartService.addTovarToCart(tovar);
  }

  increaseQuantity(tovar: ITovar): void {
    this.cartService.removeTovarFromCart(tovar);
  }

  deleteItem(tovar: ITovar): void {
    this.cartService.removePositionFromCart(tovar);
  }
}
