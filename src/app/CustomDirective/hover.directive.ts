import { Directive, ElementRef, HostListener, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHover]'
})
export class HoverDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  // if we want to add some event handler method then we can use to hostlistener
  @HostListener('mouseenter')
  onmousehover() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'yellow');
  }

}
