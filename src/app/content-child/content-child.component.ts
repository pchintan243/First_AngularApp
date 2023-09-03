import { AfterContentInit, Component, ContentChild, ElementRef, OnInit } from '@angular/core';

@Component({
  selector: 'app-content-child',
  templateUrl: './content-child.component.html',
  styleUrls: ['./content-child.component.css']
})
export class ContentChildComponent implements AfterContentInit {


  // It executes once and before the ng-content initialized
  ngOnInit() {
    console.log(this.paragraphEl); //undefined
  }

  // It invokes after the content would be initialized.
  ngAfterContentInit() {
    console.log(this.paragraphEl?.nativeElement.textContent); // nativeElement
  }

  @ContentChild('paragraph') paragraphEl: ElementRef | undefined;
}
