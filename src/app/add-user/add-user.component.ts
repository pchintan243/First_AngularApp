import { UserService } from './../Services/user.service';
import { Component } from '@angular/core';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent {

  username: string = '';
  status: string = 'active';

  constructor(private userService: UserService) { }

  addUser() {
    this.userService.AddNewUser(this.username, this.status);
    console.log(this.userService.user);
  }
}
