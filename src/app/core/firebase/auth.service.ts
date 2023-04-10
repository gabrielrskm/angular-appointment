import { inject, Injectable } from '@angular/core';
import {
   Auth,
   signInWithEmailAndPassword,
   GoogleAuthProvider,
   signInWithRedirect,
   user,
   signOut,
   
} from '@angular/fire/auth';
import { Observable, of, Subject } from 'rxjs';
import { UserInformation } from '../interface/userInfo.interface';
import { DatabaseService } from './database.service';
import { filter, switchMap } from 'rxjs/operators';

@Injectable({ providedIn: 'root' })
export class AuthService {
   private provider = new GoogleAuthProvider();
   private auth = inject(Auth);
   private userInfo = new Subject<UserInformation | null>();
   userInfo$ = this.userInfo.asObservable();
   private database = inject(DatabaseService);
   canLogin: boolean = false;
   canAdmin: boolean = false;

   loginWithEmail(email: string, password: string) {
      return signInWithEmailAndPassword(this.auth, email, password);
   }

   async loginWithGoogle() {
      this.provider.addScope('google');
      const res = await signInWithRedirect(this.auth, this.provider);
      return res;
   }

   logOut()  : Promise<void> {
      this.database.cancelQuery();
      return signOut(this.auth);
   }

   getUserInfo(): Observable<UserInformation | null> {
      const userResult = user(this.auth);
      userResult
         .pipe(
            switchMap((user) => {
               if (!user) {
                  this.canLogin = false;
                  this.canAdmin = false;
                  this.userInfo.next(null);
                  return of(null)
               };
               return this.database.readDataQueryUserInfo(user.uid);
            }),
            filter((value) => value !== null && Object.keys(value).length !== 0)
         )
         .subscribe((value) => {
            if(value?.role  === 'admin'){
               this.canAdmin = true;
            }else{
               this.canAdmin = false;
            }
            this.canLogin = true;
            this.userInfo.next(value);
         });
      return this.userInfo$;
   }
}
