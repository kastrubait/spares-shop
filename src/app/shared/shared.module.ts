import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { OrderByPipe } from './pipes/order-by.pipe';
import { FiltersBlockComponent } from './components/filters-block/filters-block.component';
import { ChangeBackgroundDirective } from './directives/change-background.directive';
import { ChangeBorderAndFontDirective } from './directives/change-border-and-font.directive';

@NgModule({
  declarations: [
    OrderByPipe,
    FiltersBlockComponent,
    ChangeBackgroundDirective,
    ChangeBorderAndFontDirective
  ],
  imports: [
    CommonModule,
    RouterModule,
  ],
  exports: [
    FiltersBlockComponent,
    OrderByPipe,
    ChangeBackgroundDirective
  ]
})
export class SharedModule { }
