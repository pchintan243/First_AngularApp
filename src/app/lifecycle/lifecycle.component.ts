import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, Input, OnChanges, OnDestroy, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-lifecycle',
  templateUrl: './lifecycle.component.html',
  styleUrls: ['./lifecycle.component.css']
})
export class LifecycleComponent implements OnInit, OnChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {
  @Input()
  value: string = 'helo';

  constructor() {
    // It shows helo in console.
    console.log('constructor ' + this.value);
  }

  // Only lifecycle hook that takes an argument.
  // It calls every time when value would be changed
  ngOnChanges(change: SimpleChanges) {
    console.log('ngOnChanges');
    console.log(change);
  }

  // It execute only once
  ngOnInit() {
    console.log('ngoninit');
    console.log(this.value);
  }

  // It would be called on every event.
  ngDoCheck() {
    console.log('ngDoCheck');
  }

  // It would be called only once. When ng-content is initialized.
  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  // It would be called every time whenever ng-content would be changed.
  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  // It would be called only once. and it would be immediately invoked after angular has completed initialization of component's view.
  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  // It would be called every time whenever content would be changed.
  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  // Something remove from the DOM. then it would be called.
  ngOnDestroy() {
    console.log('ngOnDestroy');
  }
}
