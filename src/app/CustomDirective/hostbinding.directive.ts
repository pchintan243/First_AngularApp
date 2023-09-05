import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHostbinding]'
})
export class HostbindingDirective implements OnInit {

  constructor(private element: ElementRef, private renderer: Renderer2) { }

  @Input() defaultColor: string = 'transperent';
  @Input() highlightColor: string = 'pink';

  @HostBinding('style.backgroundColor')
  background: string = this.defaultColor;
  @HostBinding('style.border')
  border: string = 'solid 2px';

  // This takes value from app component take blue color.
  ngOnInit() {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter')
  onmousehover() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.highlightColor);
  }

  @HostListener('mouseleave')
  onmouseleave() {
    this.renderer.setStyle(this.element.nativeElement, 'backgroundColor', this.defaultColor);
  }

}
