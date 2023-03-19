import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AuthComponent } from './auth/auth.component';
import { MatCardModule } from '@angular/material/card';
import { MatTabsModule} from '@angular/material/tabs';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatButtonModule} from '@angular/material/button';
import {MatDatepickerModule} from '@angular/material/datepicker';
import { PagesRoutingModule } from './pages-routing.module';

import {BrowserAnimationsModule} from 
    '@angular/platform-browser/animations';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    AuthComponent,
  ],
  imports: [
    PagesRoutingModule,
    CommonModule,
    MatCardModule,
    MatTabsModule,
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatDatepickerModule
  ],
  exports: [
    AuthComponent
  ]
})
export class PagesModule { }
