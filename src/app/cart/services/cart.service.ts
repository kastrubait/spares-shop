import { Injectable } from '@angular/core';

import { ITovar, ITovarInCart } from '../../spare-parts/models/tovar.model';

@Injectable({
  providedIn: 'root'
})
export class CartService {
  items: ITovarInCart[] = [];

  addToCart(tovar: ITovar): void {
    const indexTovar: number = this.items.findIndex((item) => item.id === tovar.id);
    if (indexTovar > -1) {
      this.items[indexTovar].quantity += 1;
    } else {
      this.items.push({ ...tovar, quantity: 1 });
    }
    console.log(this.items);
  }

  getAllItems(): ITovar[] {
    return this.items;
  }

  clearCart(): ITovar[] {
    this.items = [];
    return this.items;
  }
}
