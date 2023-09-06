import { Component, OnInit } from '@angular/core';
import { DataService } from '../Services/data.service';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {

  constructor(private dataService: DataService) { }

  // set the type of data
  userData: {
    name: string, job: string, gender: string, country: string, age: number, image: string
  }[] = [];

  ngOnInit() {
    this.userData = this.dataService.user;
  }

  showDetails(users: { name: string, job: string, gender: string, country: string, age: number, image: string }) {
    this.dataService.showUserDetails(users);
  }
}
