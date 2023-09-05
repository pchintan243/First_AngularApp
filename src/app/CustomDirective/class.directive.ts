import { Directive, ElementRef, Input, Renderer2, asNativeElements } from '@angular/core';

@Directive({
  selector: '[appClass]'
})
export class ClassDirective {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  // we can pass the selector as a alias and directly apply it to ngclass
  // @Input('appClass') set display(value: object) {
    
  // we can pass the selector as a alias and directly apply it to ngclass
  // @Input('appClass') set display(value: object) {
    
  // another way to does above
  @Input() set appClass(value: object) {
    let entries = Object.entries(value);
    // console.log(entries);

    for (let entry of entries) {
      if (entry[1]) {
        this.renderer.addClass(this.element.nativeElement, entry[0]);
      }
    }

    // another method to do the same above
    // for (let [classname, condition] of entries) {
    //   if (condition) {
    //     this.renderer.addClass(this.element.nativeElement, classname);
    //   }
    // }
  }
}
