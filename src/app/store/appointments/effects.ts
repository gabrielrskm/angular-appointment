import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { FirebaseService } from '../../core/firebase/auth.service';
import { switchMap } from 'rxjs/operators';

@Injectable()
export class AuthEffects {

  private actions$  = inject(Actions);
  private fireService  = inject(FirebaseService);


  // loginWithEmail$ = createEffect(() => this.actions$.pipe(
  //   ofType('[Auth-User] Login User With Email'),
  //   switchMap(async ({email , password}) => {

      
  //   })
  //   )
  // );

}
