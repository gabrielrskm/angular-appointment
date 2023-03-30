import { Component, inject, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BehaviorSubject, filter, Observable, tap } from 'rxjs';
import { FirebaseService } from 'src/app/core/firebase/firebase.service';


@Component({
  selector: 'app-auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss']
})
export class AuthComponent implements OnInit {
  
  router = inject(Router);
  fireService = inject (FirebaseService);
  canLogin$: Observable<string | null> = new BehaviorSubject(null);

  ngOnInit(){
    this.canLogin$ = this.fireService.getUserInfo()
    this.canLogin$.subscribe((user) => {
      if(!user)return;
      console.log(user);
      this.router.navigate(['/dashboard']);
    })
    
  }
}

