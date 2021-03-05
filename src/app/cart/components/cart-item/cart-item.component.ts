import { Component, Input } from '@angular/core';

import { ITotalCart } from "../../models/total-card.model";

@Component({
  selector: 'app-cart-item',
  templateUrl: './cart-item.component.html',
  styleUrls: ['./cart-item.component.scss']
})
export class CartItemComponent {
  @Input() total!: ITotalCart;

  // ngOnInit(): void {
  // }
}
