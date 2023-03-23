import {
  Component,
  OnInit,
  OnDestroy,
  PLATFORM_ID,
  inject,
  EnvironmentInjector,
} from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import { LoginInterface } from '../../interface/login.interface';
import { Router } from '@angular/router';
import { select, Store } from '@ngrx/store';
import { getAppointments,setDataAppointment } from 'src/app/store/appointment/actions';
import { selectAppointments } from '../../../../store/appointment/selectors';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-login',
  template: `<app-login-form (loginEvent)="login($event)"></app-login-form>`,
})
export class LoginComponent {

  dataStore$: Observable<any>

  constructor(
    private service: FirebaseService,
    private router: Router,
    private store: Store<any>
  ) {
    this.dataStore$ = this.store.select(selectAppointments)
    this.dataStore$.subscribe((data) => {
      console.log(data)
    })
    //this.store.dispatch(getAppointments());
    this.store.dispatch(setDataAppointment({value: 'gabriel'}));
    
  }

  async login(value: LoginInterface) {
    try {
      const response = await this.service.loginWithEmail(
        value.email,
        value.password
      );
      if (response) {
        this.router.navigate(['/appointment']);
      }
    } catch (error: any) {
      window.alert(error.message);
    }
  }
}
