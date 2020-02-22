import { AbstractControl, ControlContainer, ValidationErrors } from '@angular/forms';
import { resolve } from 'url';
import { reject } from 'q';
import { AstVisitor } from '@angular/compiler';

export class PasswordValidators {

  static invaidOldPassword(control: AbstractControl): Promise<ValidationErrors | null> {
return new Promise((resolve, reject) => {
      if (control.value !== '1234') {
        resolve ( { invaidOldPassword: true} ) ;
      } else {
        resolve (null);
       }
    });
  }

  static passwordShouldMatch(control: AbstractControl) {
   const newPassword = control.get('newPassword');
   const confirmPassword = control.get('confirmPassword');

   if (newPassword.value !== confirmPassword.value) {
    return { passwordShouldMatch: true};
   } else {
     return null;
    }
  }

}
