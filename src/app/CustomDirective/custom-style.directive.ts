import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appCustomStyle]'
})
export class CustomStyleDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }


  @Input() set appCustomStyle(styles: object) {
    let entries = Object.entries(styles);
    // console.log(entry);

    for (let entry of entries) {
      this.renderer.setStyle(this.element.nativeElement, entry[0], entry[1]);
    }
  }
}
