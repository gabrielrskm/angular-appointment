import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';

import { MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';

import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SiginFormComponent } from './components/sigin-form/sigin-form.component';
import { SiginComponent } from './containers/sigin/sigin.component';
import { LoginComponent } from './containers/login/login.component';

@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    SiginFormComponent,
    SiginComponent,
    LoginComponent,
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule
  ],
})
export class AuthModule {}
