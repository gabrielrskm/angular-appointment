import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FirebaseService } from '../../core/firebase/auth.service';
import { switchMap } from 'rxjs/operators';

import { loginSucces, loginFailure } from '../auth-user/actions';
import { UserInterface } from '../../core/interface/user.interface';

interface ErrorMessage {
  [key: string]: string;
}
const ERR_MESSAGE : ErrorMessage= {
  'Firebase: Error (auth/wrong-password).': 'password incorrect',
  'Firebase: Error (auth/user-not-found).': 'user not found',
  'Firebase: Error (auth/user-disabled).': 'user disabled',
  'Firebase: Error (auth/too-many-requests).': 'too many requests',
  'Firebase: Error (auth/operation-not-allowed).': 'operation not allowed',
  'Firebase: Error (auth/email-already-in-use).': 'email already in use',
  'Firebase: Error (auth/invalid-email).': 'invalid email',
  'Firebase: Error (auth/weak-password).': 'weak password'
}

const user : UserInterface = {
  id: '',
  email: '',
  name: 'unknow',
  role: 'client',
  provider: '',
  login: 'not login',
  tokken: 'NOT TOKEN',

    
}

@Injectable()
export class AuthEffects {

  private actions$  = inject(Actions);
  private fireService  = inject(FirebaseService);


  loginWithEmail$ = createEffect(() => this.actions$.pipe(
    ofType('[Auth-User] Login User With Email'),
    switchMap(async ({email , password}) => {
      try{
          const res = await this.fireService.loginWithEmail(email, password);
          user.tokken  = await res.user.getIdToken().then((value )=> {return value});
          user.provider = 'email';
          user.email = email;
          user.login = 'login success';
          const action = loginSucces({user});
          return action;
  
      }
      catch(err:any){
          const message = ERR_MESSAGE[err.message] || 'unknow error';
          const action = loginFailure({message});
          return action;
      }
    })
    )
  );

}
