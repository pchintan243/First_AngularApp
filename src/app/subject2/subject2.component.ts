import { Component, OnInit } from '@angular/core';
import { SubjectDataService } from '../Services/subject-data.service';

@Component({
  selector: 'app-subject2',
  templateUrl: './subject2.component.html',
  styleUrls: ['./subject2.component.css']
})
export class Subject2Component implements OnInit {
  
  constructor(private subjectDataService: SubjectDataService) { }

  text: string = '';
  
  ngOnInit() {
    this.subjectDataService.eventCall.subscribe((value) => {
      this.text = value;
    });
  }
}
