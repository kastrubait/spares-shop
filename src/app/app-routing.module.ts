import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TovarListComponent } from './spare-parts/components/tovar-list/tovar-list.component';
import { CartComponent } from './cart/components/cart/cart.component';

const routes: Routes = [
  {
    path: 'home',
    component: TovarListComponent,
  },
  {
    path: 'cart',
    component: CartComponent,
  },
  {
    path: '',
    pathMatch: 'full',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
