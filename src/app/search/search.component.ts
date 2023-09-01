import { Component } from '@angular/core';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent {
  searchValue : string = 'hesllo';
  changeSeachValue(eventData: Event) {
    this.searchValue = (<HTMLInputElement>eventData.target).value;
  }
}
