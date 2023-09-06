import { Component } from '@angular/core';
import { OneService } from '../Services/one.service';

@Component({
  selector: 'app-service-one',
  templateUrl: './service-one.component.html',
  styleUrls: ['./service-one.component.css'],
  // providers: [OneService]
})
export class ServiceOneComponent {

  // We don't need to invoke the providers in all component instead of we can invoke it into app.module.ts file
  // It is available in all the app component as well as it's child components.
  title: string = 'firstone'

  // It takes oneService instance from app.module.ts file
  constructor(private oneService: OneService) { }

  clickIt() {
    this.oneService.onClick(this.title);
  }
}
