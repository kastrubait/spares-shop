import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ITotalCart } from "../../models/total-card.model";
import { CartService } from '../../services/cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit {
  total!: ITotalCart[];
  totalSumm = 0;
  subscription!: Subscription;

  constructor(private cartService: CartService) {
   }

  ngOnInit (): void {
    this.total = this.cartService.getAllItems();
    this.subscription = this.cartService.eventChangedTotalSumm$
    .subscribe(
      (events: number) => {
        this.totalSumm = events;
      }
    )
  }
}
