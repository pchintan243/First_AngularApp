import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubjectDataService {

  constructor() { }

  // Subject is same as EventEmitter
  eventCall = new Subject<string>();

  onRaisedEvent(data: string) {
    // Use next instead of emit
    this.eventCall.next(data);
  }
}
