
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { userReducer } from './users/reducers';
import { UserEffects } from './users/effects';
import { UserService } from '../services/user.service';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    StoreModule.forRoot({ user: userReducer }),
    EffectsModule.forRoot([UserEffects])
  ],
  providers: [UserService]
})
export class MyStoreModule { }
