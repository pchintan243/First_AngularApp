import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {
  default: string = 'India';

  firstname: string = 'f';
  lastname: string = 'f';

  @ViewChild('inputValue') value: NgForm | undefined;

  onSubmit() {
    console.log(this.value);
  }
}
