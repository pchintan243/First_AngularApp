import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css'],
  providers: [OneService]
})
export class ServiceOneComponent {
  title: string = 'firstone'

  constructor(private oneService: OneService) {}

  clickIt() {
    this.oneService.onClick(this.title);
  }
}
