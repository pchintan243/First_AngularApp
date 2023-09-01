import { Component } from '@angular/core';

@Component({
  selector: 'app-badge',
  templateUrl: './badge.component.html',
  styleUrls: ['./badge.component.css']
})
export class BadgeComponent {
  displayNotification: boolean = false;

  closeNotification() {
    this.displayNotification = true;
  }
}
