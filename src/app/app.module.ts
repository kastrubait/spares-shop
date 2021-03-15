import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CoreModule } from './core/core.module';
import { SparePartsModule } from './spare-parts/spare-parts.module';
import { CartModule } from './cart/cart.module';
import { OrdersModule } from './orders/orders.module';
import { TovarService, MockTovarService } from './spare-parts/services/tovar.service';

import { TEST_CONSTANTS, TEST_DI_CONSTANTS } from './core/services/constants.service';

export function TovarFactory(isDev: boolean) {
  if (isDev) {
    return new MockTovarService();
  }
    return new TovarService();
}

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
    { provide: TEST_CONSTANTS, useValue: TEST_DI_CONSTANTS },
    TovarService,
    { provide: 'IS_DEV_ENVIRONMENT', useValue: true },
    // { provide: TovarService, useFactory: TovarFactory(true), deps: ['IS_DEV_ENVIRONMENT'] }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
