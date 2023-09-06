import { AnotherService } from './another.service';
import { Injectable } from '@angular/core';

// Injectable is use for getting another service into a service.
// Make sure you use Injectable where you want a service.
@Injectable()
export class UserService {

  constructor(private anotherService: AnotherService) { }

  user = [
    { name: 'user1', status: 'active' },
    { name: 'user2', status: 'inactive' },
    { name: 'user3', status: 'active' },
  ]

  AddNewUser(name: string, status: string) {
    this.user.push({ name: name, status: status });
    this.anotherService.logMessage(name, status);
  }
}
