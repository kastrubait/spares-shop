import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { TOVARS_IN_CART } from '../../shared/constants/constants';
import { ITovar } from '../../spare-parts/models/tovar.model';
import { ITotalCart } from '../models/total-card.model';
import { LocalStorageService } from '../../core/services/local-storage.service';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ITotalCart[] = [];
  key = TOVARS_IN_CART;
  totalInCart = 0;
  totalSumm = 0;
  eventChangedCountTovar$ = new Subject<number>();
  eventChangedTotalSumm$ = new Subject<number>();
  eventChangedItemsCart$ = new Subject<ITotalCart[]>();

  constructor(private localStorageService: LocalStorageService) {}

  addTovarToCart(tovar: ITovar): void {
    const indexTovar: number = this.items.findIndex((item) => item.tovar.id === tovar.id);
    if (indexTovar > -1) {
      this.items[indexTovar].quantity += 1;
      this.items[indexTovar].summ += tovar.price[0].cost;
    } else {
      this.items.push({ tovar, quantity: 1, summ: tovar.price[0].cost });
    }
    this.updateCartData();
  }

  removePositionFromCart(tovar: ITovar): void {
    const indexTovar: number = this.items.findIndex((item) => item.tovar.id === tovar.id);
    if (indexTovar > -1) {
      this.items = this.items.slice(0, indexTovar).concat(this.items.slice(indexTovar + 1))
    }
    this.updateCartData();
  }

  removeTovarFromCart(tovar: ITovar): void {
    const indexTovar: number = this.items.findIndex((item) => item.tovar.id === tovar.id);
    if (indexTovar > -1) {
      this.items[indexTovar].quantity -= 1;
      this.items[indexTovar].summ -= tovar.price[0].cost;
    } else {
      console.error('Item is not in the cart');
    }
    if (this.items[indexTovar].quantity === 0) {
      this.items = this.items.slice(0, indexTovar).concat(this.items.slice(indexTovar + 1))
    }
    this.updateCartData();
  }

  countTovarInCart(items: ITotalCart[]): number {
    return items.reduce((sum, current) => sum + current.quantity, 0);
  }

  getTotalSumm(items: ITotalCart[]): number {
    return items.reduce((sum, current) => sum + current.quantity*current.tovar.price[0].cost, 0);
  }

  getAllItems(): ITotalCart[] {
    return this.items;
  }

  updateCartData(): void {
    this.localStorageService.set(this.key, this.items);
    this.totalInCart = this.countTovarInCart(this.items.slice());
    this.totalSumm = this.getTotalSumm(this.items.slice());
    this.eventChangedCountTovar$.next(this.totalInCart);
    this.eventChangedTotalSumm$.next(this.totalSumm);
    this.eventChangedItemsCart$.next(this.items);
  }

  clearCart(): ITotalCart[] {
    this.items = [];
    this.updateCartData();
    return this.items;
  }
}
