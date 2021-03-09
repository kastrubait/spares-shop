import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';

import { TEST_CONSTANTS, TEST_DI_CONSTANTS } from './core/services/constants.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CoreModule,
    SparePartsModule,
    CartModule,
    OrdersModule
  ],
  providers: [
    {
      provide: TEST_CONSTANTS,
      useValue: TEST_DI_CONSTANTS,
    },
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
