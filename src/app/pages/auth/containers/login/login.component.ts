import { Component, OnInit, OnDestroy, PLATFORM_ID, inject } from '@angular/core';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';
import { LoginInterface } from '../../interface/login.interface';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { getAppointments } from 'src/app/store/appointment/actions';

@Component({
  selector: 'app-login',
  template: `<app-login-form (loginEvent)="login($event)"></app-login-form>`,
})
export class LoginComponent {

  

  constructor(private service : FirebaseService, private router: Router
    , private store : Store) { 
      store.select (  getAppointments,
        ).subscribe(users => {
        console.log(users.type);
      })
    
  }
    
  

  async login(value: LoginInterface) {
    try{
      const response  = await this.service.loginWithEmail(value.email, value.password);
      if(response){
        this.router.navigate(['/appointment']);
      }
    }
    catch(error : any){
      
      window.alert(error.message);
    }
  }

}
