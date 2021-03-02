import { Component, OnInit } from '@angular/core';

import { ITovar } from '../../../spare-parts/models/tovar.model';
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  tovarsInCart!: ITovar[];
  totalSumm = 0;

  constructor(private cartService: CartService) {
   }

  ngOnInit (): void {
    this.tovarsInCart = this.cartService.getAllItems();
    console.log(this.tovarsInCart);
  }
}
