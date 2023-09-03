import { Component } from '@angular/core';

@Component({
  selector: 'app-lifecycle-search',
  templateUrl: './lifecycle-search.component.html',
  styleUrls: ['./lifecycle-search.component.css']
})
export class LifecycleSearchComponent {

  inputText: string = '';
  destroy: boolean = true;
  getText(inputElement: HTMLInputElement) {
    this.inputText = inputElement.value;
  }

  onDestroy() {
    this.destroy = false;
  }
}
