import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css']
})
export class ServiceTwoComponent {
  title: string = 'second one'

  clickIt() {
    const instaneOfService = new OneService();
    instaneOfService.onClick(this.title);
  }
}
