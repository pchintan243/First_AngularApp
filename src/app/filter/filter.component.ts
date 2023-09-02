import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent {

  // We can pass data from parent component to child component using @Input decorator
  @Input('total') all: number = 0;
  @Input() premium: number = 0;
  @Input() free: number = 0;

  getSelectedValue: string = 'All';

  // To get the selected value of radio button
  // Custom event binding
  @Output()
  filterRadio: EventEmitter<string> = new EventEmitter<string>();

  onRadioButtonChange() {
    this.filterRadio.emit(this.getSelectedValue);
  }
}
