import { Component, inject, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Store } from '@ngrx/store';
import { FirebaseService } from './core/firebase/firebase.service';
import { AppState } from './store/app.state';
import { loadAppointment } from './store/appointments/actions';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent implements OnInit {

  chargeValue : boolean = false;

  loginService = inject(FirebaseService);
  router = inject(Router);
  store = inject(Store<AppState>);


  ngOnInit(): void {

    
    this.loginService.sessionActivate().subscribe(value => {
      if(!value)return;
      this.chargeValue = true;
    });
    
  }



  
}
