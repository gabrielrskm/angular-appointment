import { CanActivateFn, Router, UrlTree } from '@angular/router';
import { inject } from '@angular/core';
import { AuthService } from 'src/app/core/firebase/auth.service';


export const authGuard: CanActivateFn = () => {
  const fireService = inject(AuthService);
  const router = inject(Router);
  if (fireService.canLogin) return true
  router.navigate(['/auth']);
  return false;
};

export const authGuardAdmin: CanActivateFn = () => {

  const fireService = inject(AuthService);
  const router = inject(Router);
  if (fireService.canAdmin) return true
  router.navigate(['/auth']);
  return false;
  
};

