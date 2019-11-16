import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { PasswordValidators } from './password.validators';

@Component({
  selector: 'app-password-reset',
  templateUrl: './password-reset.component.html',
  styleUrls: ['./password-reset.component.css']
})
export class PasswordResetComponent {

  form: FormGroup;
  constructor(fb: FormBuilder) {

    this.form = fb.group({
      oldPassword: ['',
      Validators.required,
      PasswordValidators.invaidOldPassword
    ],
      newPassword: ['',
      Validators.required
    ],
      confirmPassword: ['',
       Validators.required
      ]
    }, {
      validator : PasswordValidators.passwordShouldMatch
    });
  }

  get oldPassword() {
    return this.form.get('oldPassword');
  }

  get newPassword() {
    return this.form.get('newPassword');
  }

  get confirmPassword() {
    return this.form.get('confirmPassword');
  }

}
