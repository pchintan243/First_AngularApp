import { Directive, ElementRef, HostBinding, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @HostBinding('style.backgroundColor')
  background: string = 'grey';
  @HostBinding('style.border')
  border: string = 'solid 2px';

  @HostListener('mouseenter')
  onmousehover() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'grey');
  }

}
