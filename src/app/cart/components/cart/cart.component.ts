/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import {
 Component, Input, OnDestroy, OnInit
} from '@angular/core';
import { Subscription } from 'rxjs';

import { ITotalCart } from "../../models/total-card.model";
import { CartService } from '../../services/cart.service';
import { LocalStorageService } from '../../../core/services/local-storage.service';
import { ISort } from '../../../shared/models/sort.model';
import { SORT_KEY } from '../../../shared/constants/constants';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent implements OnInit, OnDestroy {
  total: ITotalCart[] = [];
  totalSumm = 0;
  totalSummSubscription = new Subscription();
  localStorageChanges$ = this.localStorageService.changes$;
  @Input() sortChanged: ISort = {
    active: SORT_KEY[0].active,
    direction: ''
  }

  constructor(
    private cartService: CartService,
    private localStorageService: LocalStorageService,
  ) {}

  ngOnInit (): void {
    this.total = this.cartService.getAllItems();
    // this.total = this.localStorageChanges$.value;
    this.totalSumm = this.cartService.getTotalSumm(this.total);
    this.totalSummSubscription = this.cartService.eventChangedTotalSumm$
    .subscribe(
      (events: number) => {
        this.totalSumm = events;
      }
    )
  }

  setSortOptions(sort: ISort): void {
    this.sortChanged = sort;
  }

  ngOnDestroy(): void {
    this.totalSummSubscription.unsubscribe();
  }
}
