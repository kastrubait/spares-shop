import {
 Directive, Input, Renderer2, ElementRef, HostListener
} from '@angular/core';

@Directive({
  selector: '[appShowDeleteBtn]'
})
export class ShowDeleteBtnDirective {
  @Input('appShowDeleteBtn') classVisible = 'visible';

  constructor(
    private renderer: Renderer2,
    private el: ElementRef
  ) { }

  @HostListener('mouseover') onMouseOver(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const deleteBtnEl: HTMLElement = this.el.nativeElement.querySelector('.delete-btn') as HTMLElement;
    this.renderer.addClass(deleteBtnEl, 'visible');
  }

  @HostListener('mouseleave') onMouseLeave(): void {
    // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
    const deleteBtnEl: HTMLElement = this.el.nativeElement.querySelector('.delete-btn') as HTMLElement;
    this.renderer.removeClass(deleteBtnEl, 'visible');
  }
}
