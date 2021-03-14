import {
 Directive, ElementRef, Renderer2, HostListener, HostBinding, Input, OnInit
} from '@angular/core';

import { HOVER_BGCOLOR } from '../constants/constants';

@Directive({
  selector: '[appChangeBackground]'
})
export class ChangeBackgroundDirective implements OnInit {
  @HostBinding('cart-container--total.outline-primary') private ishovering = false;
  @Input() defaultColor: string = HOVER_BGCOLOR;
  private oldBgColor = '';

  constructor(
    private el: ElementRef,
    private renderer: Renderer2
  ) {}

  ngOnInit(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    this.oldBgColor = this.el.nativeElement.style.backgroundColor as string;
  }

  setBgColor(color: string): void {
    this.renderer.setStyle(this.el.nativeElement, 'backgroundColor', color);
  }

  @HostListener('mouseenter') onMouseEnter(): void {
    this.setBgColor(this.defaultColor);
    this.ishovering = true;
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    this.setBgColor(this.oldBgColor);
    this.ishovering = false;
  }
}
