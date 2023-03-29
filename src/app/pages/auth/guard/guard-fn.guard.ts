import { CanActivateFn, Router } from '@angular/router';
import { inject } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/store/app.state';
import { selecCurrentUser } from 'src/app/store/auth-user/selector';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const store = inject(Store<AppState>);

  const user$ = store.select(selecCurrentUser);
  user$.subscribe( user => {
    if (user.tokken !== 'NOT TOKEN') {
      console.log('Token in local storage')
      return true;
    } 
    else {
      console.log('NO token in local storage')
      router.navigate(['/auth']);
      return false;

    }
  })

  return true;
};
