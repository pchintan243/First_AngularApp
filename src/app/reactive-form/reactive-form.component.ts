import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup;

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      // To set default value we need to pass this value instead of null.
      firstname: new FormControl(null),
      lastname: new FormControl(null),
      email: new FormControl('patelchintan843@gmail.com'),
      country: new FormControl('Canada'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null)
    })
  }

  onSubmit() {
    console.log(this.reactiveForm);

  }
}
