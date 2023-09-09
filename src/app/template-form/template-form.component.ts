import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  default: string = 'India';

  firstname: string = 'firstname';
  lastname: string = 'lastname';
  defaultInterest = 'coding';

  interest = [
    { id: '1', value: 'computer' },
    { id: '2', value: 'web development' },
    { id: '3', value: 'coding' },
    { id: '4', value: 'programming' }
  ]

  @ViewChild('inputValue') value: NgForm | undefined;

  onSubmit() {
    console.log(this.value);
  }
}
