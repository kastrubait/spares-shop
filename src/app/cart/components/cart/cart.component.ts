/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';

import { ITotalCart } from "../../models/total-card.model";
import { CartService } from '../../services/cart.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  total: ITotalCart[] = [];
  totalSumm = 0;
  totalSummSubscription!: Subscription;
  localStorageChanges$ = this.localStorageService.changes$;

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit (): void {
  this.total = this.cartService.getAllItems();
  // this.total = this.localStorageChanges$.value;

    this.totalSummSubscription = this.cartService.eventChangedTotalSumm$
    .subscribe(
      (events: number) => {
        this.totalSumm = events;
      }
    )
  }

  ngOnDestroy(): void {
    this.totalSummSubscription.unsubscribe();
  }
}
