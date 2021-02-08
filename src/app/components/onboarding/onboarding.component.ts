import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  form: FormGroup;
  constructor(private formBuilder: FormBuilder) { }

  ngOnInit(): void {
    this.form = this.formBuilder.group({
      email: new FormControl('', {
        validators: [Validators.email, Validators.required]
      }),
      passwordOne: ['', [Validators.required]],
      passwordTwo: ['', [Validators.required]]
    })
  }

  get email(): AbstractControl { return this.form.get('email') };
  get passwordOne(): AbstractControl { return this.form.get('passwordOne'); }
  get passwordTwo(): AbstractControl { return this.form.get('passwordTwo'); }
  submit() {
    console.log(this.form.value);
    if (!this.form.valid) {
      console.warn('Form is Not Valid!');
    }
  }

}
