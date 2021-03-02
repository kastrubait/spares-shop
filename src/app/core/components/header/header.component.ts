import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { Router } from '@angular/router';

import { CartService } from '../../../cart/services/cart.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  totalInCart = 0;

  subscription!: Subscription;

  constructor(private cartService: CartService, private router: Router) { }

  ngOnInit(): void {
    this.subscription = this.cartService.eventChangedCountTovar
    .subscribe(
      (events: number) => {
        this.totalInCart = events;
      }
    )
  }

  goToCartPage(): void {
    // eslint-disable-next-line @typescript-eslint/no-floating-promises
    this.router.navigateByUrl('/cart');
  }
}
