import { DataService } from './../Services/data.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-user-show',
  templateUrl: './user-show.component.html',
  styleUrls: ['./user-show.component.css']
})
export class UserShowComponent implements OnInit {
  constructor(private dataService: DataService) { }

  user: {
    name: string; job: string; gender: string; country: string; age: number; image: string;
  } | undefined;

  ngOnInit() {
    this.dataService.OnShowDetails.subscribe((data: {
      name: string, job: string, gender: string, country: string, age: number, image: string
    }) => {
      this.user = data;
    })
  }
}
