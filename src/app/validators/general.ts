import { FormGroup, ValidatorFn } from "@angular/forms";




export function passwordsMatch(passwordField1: string, passwordField2: string): ValidatorFn {
  return (group: FormGroup) => {
    return group.get(passwordField1).value === group.get(passwordField2).value ? null : ({
      passwords: 'Passwords Do Not Match'
    })
  }
}
