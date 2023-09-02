import { Component, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-find',
  templateUrl: './find.component.html',
  styleUrls: ['./find.component.css']
})
export class FindComponent {
  getText: string = '';

  @Output()
  searchValueGet: EventEmitter<string> = new EventEmitter<string>();

  onTextChange() {
    this.searchValueGet.emit(this.getText);
  }
}
