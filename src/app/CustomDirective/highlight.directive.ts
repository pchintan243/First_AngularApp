import { Directive, ElementRef, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective implements OnInit {


  constructor(private element: ElementRef, private renderer: Renderer2) {

  }

  ngOnInit(): void {
    // setstyle using renderer2 method
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', 'red');
    // It shows the title when you hovor the tag
    this.renderer.setAttribute(this.element.nativeElement, 'title', 'div class');
  }

}
