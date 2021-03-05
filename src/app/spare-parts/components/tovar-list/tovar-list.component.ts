import {
 Component, OnInit, Input, ChangeDetectionStrategy
} from '@angular/core';

import { ITovar } from '../../models/tovar.model';
import { CartService } from '../../../cart/services/cart.service';
import { TovarService } from '../../services/tovar.service';

@Component({
  selector: 'app-tovar-list',
  templateUrl: './tovar-list.component.html',
  styleUrls: ['./tovar-list.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class TovarListComponent implements OnInit {
  tovars: ITovar[] = [];

  @Input() tovarSelected!: ITovar;

  constructor(
    private cartService: CartService,
    private tovarService: TovarService
  ) {}

  ngOnInit (): void {
    this.tovars = this.tovarService.getAllTovars();
  }

  setTovarSelected(tovar: ITovar): void {
    this.tovarSelected = tovar;
    this.addToCart(this.tovarSelected);
  }

  addToCart(tovarSelected: ITovar): void {
    this.cartService.addTovarToCart(tovarSelected);
  }
}
