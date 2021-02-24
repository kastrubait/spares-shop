import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TovarComponent } from './spare-parts/components/tovar/tovar.component';

const routes: Routes = [
  {
    path: 'home',
    component: TovarComponent,
  },
  {
    path: 'cart',
    component: TovarComponent,
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
