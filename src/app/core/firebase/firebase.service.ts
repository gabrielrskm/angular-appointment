import { inject, Injectable } from '@angular/core';
import {
  Auth,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect, 
  idToken
} from '@angular/fire/auth';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  private provider = new GoogleAuthProvider();
  private auth = inject(Auth);
  private canLogin = new BehaviorSubject<boolean>(false);
  canLogin$ = this.canLogin.asObservable();

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password)
  }
  
  async loginWithGoogle() {
    this.provider.addScope('google');
    const res = await signInWithRedirect(this.auth, this.provider);
    return res;
  }

  sessionActivate () : Observable<boolean>   {
    (idToken(this.auth).subscribe(
      (token) => {
        if (token){
          this.canLogin.next(true);
        }
        else{
          this.canLogin.next(false);
        }
      }
    ))
      return this.canLogin$;
  }


}




