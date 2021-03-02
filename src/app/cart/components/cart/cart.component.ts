import { Component, OnInit } from '@angular/core';

import { ITovar } from '../../../spare-parts/models/tovar.model';
import { ITotalCard } from "../../models/total-card.model";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  tovarInCard!: ITovar[];
  total!: ITotalCard[];
  totalSumm = 0;

  constructor(private cartService: CartService) {
   }

  ngOnInit (): void {
    this.tovarInCard = this.cartService.getAllItems();
  }
}
