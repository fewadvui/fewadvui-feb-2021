import { AbstractControl, AsyncValidatorFn, FormGroup, ValidationErrors, ValidatorFn } from "@angular/forms";
import { Observable, timer } from "rxjs";
import { map, switchMap } from "rxjs/operators";
import { UserManagerService } from "../services/user-manager.service";




export function passwordsMatch(passwordField1: string, passwordField2: string): ValidatorFn {
  return (group: FormGroup) => {
    return group.get(passwordField1).value === group.get(passwordField2).value ? null : ({
      passwords: 'Passwords Do Not Match'
    })
  }
}


export class EmailDoesNotAlreadyExistValidator {

  static createValidator(service: UserManagerService, timerMs: number = 300): AsyncValidatorFn {
    return (control: AbstractControl): Observable<ValidationErrors> => {
      return timer(timerMs).pipe(
        switchMap(() => service.userEmailExists(control.value)
          .pipe(
            map(exists => {
              return !exists ? null : {
                emailValidator: 'Email Already Exists'
              }
            })
          )
        )
      )
    }
  }
}
