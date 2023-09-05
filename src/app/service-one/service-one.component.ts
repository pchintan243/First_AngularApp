import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css']
})
export class ServiceOneComponent {
  title: string = 'firstone'

  clickIt() {
    const instaneOfService = new OneService();
    instaneOfService.onClick(this.title);
  }
}
