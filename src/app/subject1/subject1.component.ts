import { Component } from '@angular/core';
import { SubjectDataService } from '../Services/subject-data.service';

@Component({
  selector: 'app-subject1',
  templateUrl: './subject1.component.html',
  styleUrls: ['./subject1.component.css']
})
export class Subject1Component {

  enterText: string = '';

  constructor(private subjectDataService: SubjectDataService) { }

  onClick() {
    this.subjectDataService.onRaisedEvent(this.enterText);
  }
}
