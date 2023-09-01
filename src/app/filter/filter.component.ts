import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // We can pass data from parent component to child component using @Input decorator
  @Input() all: number = 0;
  @Input() premium: number = 0;
  @Input() free: number = 0;
}
