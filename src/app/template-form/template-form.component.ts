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

  @ViewChild('inputValue') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
  }

  // To set the default value
  // patchvalue is recommended to set the default value
  setDefault() {
    // For setValue we need to write all the fields of form.

    // this.form?.setValue({
    //   country: "India",
    //   email: "patelchintan843@gmail.com",
    //   firstname: "firstname",
    //   gender: "female",
    //   hobbies: '',
    //   interest: "coding",
    //   lastname: "firstname",
    // })

    // pathvalue requires only those fields which we have to set by default.
    this.form?.form.patchValue({
      firstname: 'jfdljs'
    })
  }
}
