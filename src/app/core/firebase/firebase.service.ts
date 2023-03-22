import { inject, Injectable } from '@angular/core';
import {
  Auth,
  signInWithPopup,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  GoogleAuthProvider,
  signInWithRedirect,
} from '@angular/fire/auth';

@Injectable({ providedIn: 'root' })
export class FirebaseService {
  provider = new GoogleAuthProvider();
  private auth = inject(Auth);

  loginWithEmail(email: string, password: string) {
    return signInWithEmailAndPassword(this.auth, email, password);
  }
  
  async loginWithGoogle() {
    this.provider.addScope('profile');
    this.provider.addScope('email');
    await signInWithRedirect(this.auth, this.provider);
  }
}
