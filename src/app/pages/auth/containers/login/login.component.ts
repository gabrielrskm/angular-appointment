import { Component } from '@angular/core';
import { LoginInterface } from '../../interface/login.interface';

@Component({
  selector: 'app-login',
  template: `<app-login-form (loginEvent)="formValue($event)"></app-login-form>`
})
export class LoginComponent {

  formValue(value: LoginInterface) {
    console.log(value);
  }
}
