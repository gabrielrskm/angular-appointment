import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AuthRoutingModule } from './auth-routing.module';
import { FormsModule } from '@angular/forms';



import { MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { MatCardModule } from '@angular/material/card';
import {MatIconModule} from '@angular/material/icon';

import { AuthComponent } from './auth.component';
import { LoginFormComponent } from './components/login-form/login-form.component';
import { SiginFormComponent } from './components/sigin-form/sigin-form.component';
import { SiginComponent } from './containers/sigin.component';
import { LoginComponent } from './containers/login.component';
import { PopUpFormComponent } from './components/pop-up-form/pop-up-form.component';

import { PopUpComponent } from './containers/popup.component';



@NgModule({
  declarations: [
    AuthComponent,
    LoginFormComponent,
    SiginFormComponent,
    SiginComponent,
    LoginComponent,
    PopUpFormComponent,
    PopUpComponent
  ],
  imports: [
    CommonModule, 
    AuthRoutingModule,
    FormsModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule,
    MatCardModule,
    MatIconModule,

  ],
  providers: [
  ]
})
export class AuthModule {}
