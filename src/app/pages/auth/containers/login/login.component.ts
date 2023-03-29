import {Component, inject} from '@angular/core';
import { LoginInterface } from '../../interface/login.interface';
import { Store } from '@ngrx/store';
import { loginUserWithEmail } from 'src/app/store/auth-user/actions';
import { Observable } from 'rxjs';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';

@Component({
  selector: 'app-login',
  template: `<app-login-form (loginEvent)="login($event)"></app-login-form>
  <p *ngIf="login$ | async"> Usuario registrado</p>
  <p *ngIf="!(login$ | async)">Usuario No registrado</p>`,
})
export class LoginComponent{
  private store = inject(Store);
  private fireService  = inject (FirebaseService);
  login$ : Observable<boolean> = this.fireService.canLogin$;



  login(value: LoginInterface) {
    this.store.dispatch(loginUserWithEmail({
      email: value.email, password: value.password
    }));

  }
}
