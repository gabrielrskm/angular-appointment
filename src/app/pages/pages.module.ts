import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AuthModule } from './auth/auth.module';

import { FirebaseService } from '../core/firebase/firebase.service';



@NgModule({
  declarations: [
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    AuthModule,
  ],
  exports: [
  ],
  providers: [
    FirebaseService
  ]
})
export class PagesModule { }
