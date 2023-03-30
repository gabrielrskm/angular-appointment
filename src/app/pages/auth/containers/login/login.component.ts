import {Component, inject} from '@angular/core';
import { LoginInterface } from '../../interface/login.interface';
import { Store } from '@ngrx/store';
import { loginUserWithEmail } from 'src/app/store/auth-user/actions';

@Component({
  selector: 'app-login',
  template: `<app-login-form (loginEvent)="login($event)"></app-login-form>`,
})
export class LoginComponent{
  private store = inject(Store);

  login(value: LoginInterface) {
    this.store.dispatch(loginUserWithEmail({
      email: value.email, password: value.password
    }));

  }
}
