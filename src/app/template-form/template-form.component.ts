import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-template-form',
  templateUrl: './template-form.component.html',
  styleUrls: ['./template-form.component.css']
})
export class TemplateFormComponent {

  firstname: string = '';
  lastname: string = '';
  email: string = '';
  country: string = '';
  gender: string = '';
  defaultInterest = '';

  interest = [
    { id: '1', value: 'computer' },
    { id: '2', value: 'web development' },
    { id: '3', value: 'coding' },
    { id: '4', value: 'programming' }
  ]

  @ViewChild('inputValue') form: NgForm | undefined;

  onSubmit() {
    console.log(this.form);
    this.firstname = this.form?.value.firstname;
    this.lastname = this.form?.value.lastname;
    this.gender = this.form?.value.gender;
    this.country = this.form?.value.country;
    this.defaultInterest = this.form?.value.interest;
    this.email = this.form?.value.email;

    // After submit it removes the information from fields.
    this.form?.reset();
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
