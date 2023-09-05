import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css'],
  providers: [OneService]
})
export class ServiceTwoComponent {
  title: string = 'second'

  constructor(private oneService: OneService) { }

  clickIt() {
    this.oneService.onClick(this.title);
  }
}
