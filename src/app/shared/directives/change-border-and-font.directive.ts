/* eslint-disable @typescript-eslint/no-unsafe-member-access */
import {
 Directive, ElementRef, Renderer2, Input, AfterViewInit, HostListener
} from '@angular/core';

import { HOVER_BGCOLOR } from '../constants/constants';

@Directive({
  selector: '[appChangeBorderAndFont]'
})
export class ChangeBorderAndFontDirective implements AfterViewInit {
  @Input() borderColor: string = HOVER_BGCOLOR;
  @Input() borderWidth = '2px';
  @Input() fontFamily = '';

  private isInitialState = true;
  private initialBorderWidth = '';
  private initialBorderColor = '';
  private initialFontFamily = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngAfterViewInit(): void {
    this.initialBorderColor = this.el.nativeElement.style.borderColor as string;
    this.initialBorderWidth = this.el.nativeElement.style.borderWidth as string;
    this.initialFontFamily = this.el.nativeElement.style.FontFamily as string;
    console.log(this.initialBorderColor);
  }

  @HostListener('click') onClick():void {
    this.toggleChangedStyleTovar();
  }

  toggleChangedStyleTovar(): void {
    this.isInitialState = !this.isInitialState;
    console.log(this.isInitialState);

    this.renderer.setStyle(
        this.el.nativeElement,
        'FontFamily',
        this.isInitialState ? this.fontFamily : this.initialFontFamily,
    );

    this.renderer.setStyle(
        this.el.nativeElement,
        'borderWidth',
        this.isInitialState ? this.borderWidth : this.initialBorderWidth,
    );

    this.renderer.setStyle(
        this.el.nativeElement,
        'borderColor',
        this.isInitialState ? this.borderColor : this.initialBorderColor,
    );
  }
}
