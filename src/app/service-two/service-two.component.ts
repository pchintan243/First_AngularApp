import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-two',
  templateUrl: './service-two.component.html',
  styleUrls: ['./service-two.component.css'],
  // providers: [OneService]
})
export class ServiceTwoComponent {

  // We don't need to invoke the providers in all component instead of we can invoke it into app.module.ts file
  // It is available in all the app component as well as it's child components.
  title: string = 'second'

  constructor(private oneService: OneService) { }

  clickIt() {
    this.oneService.onClick(this.title);
  }
}
