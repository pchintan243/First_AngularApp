import { Component } from '@angular/core';

@Component({
  selector: 'app-cust-struct',
  templateUrl: './cust-struct.component.html',
  styleUrls: ['./cust-struct.component.css']
})
export class CustStructComponent {
  show: boolean = false;

  showText() {
    this.show = true;
  }
}
