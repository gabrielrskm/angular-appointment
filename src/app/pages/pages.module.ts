import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesRoutingModule } from './pages-routing.module';

import { AuthModule } from './auth/auth.module';



@NgModule({
  declarations: [
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    AuthModule
  ],
  exports: [
  ]
})
export class PagesModule { }
