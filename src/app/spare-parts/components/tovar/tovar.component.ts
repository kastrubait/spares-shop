import { Component } from '@angular/core';

import { TOVARS } from '../../../mock-data/tovars';
import { ITovar } from '../../models/tovar.model';
import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-tovar',
  templateUrl: './tovar.component.html',
  styleUrls: ['./tovar.component.scss']
})
export class TovarComponent {
  tovars = TOVARS;

  constructor(private cartService: CartService) { }

  addToCart(tovar: ITovar): void {
    this.cartService.addToCart(tovar);
  }
}
