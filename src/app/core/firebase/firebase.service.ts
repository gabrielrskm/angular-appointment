import { inject, Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect, 
  user,
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';
import { DatabaseService } from './database.service';

@Injectable({ providedIn: 'root' })

export class FirebaseService {
  private provider = new GoogleAuthProvider();
  private auth = inject(Auth);
  private canLogin = new BehaviorSubject<string | null>(null);
  canLogin$ = this.canLogin.asObservable();
  private dataService = inject(DatabaseService);

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  
  async loginWithGoogle() {
    this.provider.addScope('google');
    const res = await signInWithRedirect(this.auth, this.provider);
    return res;
  }

  getUserInfo () : Observable<string | null> {
    const userResult = user(this.auth);
    userResult.subscribe(
      (user) => {
        if( !user)return;
        this.canLogin.next(user.email);
      }
    )
    return this.canLogin$;
  }
}




