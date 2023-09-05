import { Directive, Input, TemplateRef, ViewContainerRef } from '@angular/core';

@Directive({
  selector: '[appNgIf]'
})
export class NgIfDirective {

  // First Parameter: What to add or remove
  // Second Parameter: Where to add or remove

  constructor(private template: TemplateRef<any>, private viewContainer: ViewContainerRef) {

  }

  @Input() set appNgIf(condition: boolean) {
    if (condition) {
      this.viewContainer.createEmbeddedView(this.template);
    }
    else {
      this.viewContainer.clear();
    }
  }

}
