import { Component, OnInit } from '@angular/core';
import { AbstractControl, FormBuilder, FormControl, FormGroup, ValidationErrors, Validators } from '@angular/forms';
import { UserManagerService } from 'src/app/services/user-manager.service';
import { passwordsMatch, EmailDoesNotAlreadyExistValidator } from 'src/app/validators/general';

@Component({
  selector: 'app-onboarding',
  templateUrl: './onboarding.component.html',
  styleUrls: ['./onboarding.component.css']
})
export class OnboardingComponent implements OnInit {

  form: FormGroup = this.formBuilder.group({
    email: new FormControl('', {
      validators: [Validators.email, Validators.required, Validators.maxLength(100)],
      asyncValidators: [EmailDoesNotAlreadyExistValidator.createValidator(this.service, 250)]
    }),
    passwordOne: ['', [Validators.required]],
    passwordTwo: ['', [Validators.required]]
  }, {
    validators: passwordsMatch('passwordOne', 'passwordTwo')
  })
  constructor(private formBuilder: FormBuilder, private service: UserManagerService) { }

  ngOnInit(): void {

  }

  get email(): AbstractControl { return this.form.get('email') };
  get passwordOne(): AbstractControl { return this.form.get('passwordOne'); }
  get passwordTwo(): AbstractControl { return this.form.get('passwordTwo'); }
  submit() {
    console.log(this.form.value);
    if (!this.form.valid) {
      // this is for accessibility - prefer NOT to disable the submit button, do this instead.
      Object.keys(this.form.controls).forEach(field => {
        const control = this.form.get(field);
        control.markAsTouched({ onlySelf: true });
      })
    } else {
      // dispatch your action or whatever...
      this.form.reset();
    }
  }
}



