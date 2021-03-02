import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

import { ITovar } from '../../spare-parts/models/tovar.model';
import { ITotalCart } from "../models/total-card.model";

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ITotalCart[] = [];
  totalInCart = 0;

  eventChangedCountTovar = new Subject<number>();

  addToCart(tovar: ITovar): void {
    const indexTovar: number = this.items.findIndex((item) => item.tovar.id === tovar.id);
    if (indexTovar > -1) {
      this.items[indexTovar].quantity += 1;
    } else {
      this.items.push({ tovar, quantity: 1 });
    }

    this.totalInCart = this.countTovarInCart(this.items.slice());

    this.eventChangedCountTovar.next(this.totalInCart);
  }

  countTovarInCart(items: ITotalCart[]): number {
    return items.reduce((sum, current) => sum + current.quantity, 0);
  }

  getAllItems(): ITotalCart[] {
    return this.items;
  }

  clearCart(): ITotalCart[] {
    this.items = [];
    return this.items;
  }
}
