import { Component, OnInit } from '@angular/core';
import { FormArray, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-reactive-form',
  templateUrl: './reactive-form.component.html',
  styleUrls: ['./reactive-form.component.css']
})
export class ReactiveFormComponent implements OnInit {

  reactiveForm!: FormGroup;
  // In reactive form we need to implement all the logic into typescript file.

  ngOnInit(): void {
    this.reactiveForm = new FormGroup({
      // To set default value we need to pass this value instead of null.
      firstname: new FormControl(null, Validators.minLength(4)),
      lastname: new FormControl(null, Validators.required),
      email: new FormControl('patelchintan843@gmail.com', [Validators.required, Validators.email]),
      country: new FormControl('Canada'),
      gender: new FormControl('male'),
      hobbies: new FormControl(null),
      skills: new FormArray([
        new FormControl(null, Validators.required),
      ])
    })

    // Value change events
    this.reactiveForm.valueChanges.subscribe((value) => {
      // console.log(value);
    })

    // Status change event return the state form.
    // It returns valid invalid and pending state
    // If all of the fields are valid then and then only it returns valid otherwise it retuns false
    this.reactiveForm.statusChanges.subscribe((value) => {
      // console.log(value);
    })

  }

  get skillsArr() {
    return this.reactiveForm.get('skills') as FormArray;
  }

  onSubmit() {
    console.log(this.reactiveForm);
    this.reactiveForm.reset();
  }

  addSkill() {
    (<FormArray>this.reactiveForm.get('skills')).push(new FormControl(null, Validators.required));
  }
}
