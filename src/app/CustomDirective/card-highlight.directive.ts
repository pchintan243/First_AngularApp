import { Directive, ElementRef, Input, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appCardHighlight]'
})
export class CardHighlightDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() set appCardHighlight(condition: boolean) {
    if(condition) {
      this.renderer.addClass(this.element.nativeElement, 'card-highlight-color');
    }
  }
}
