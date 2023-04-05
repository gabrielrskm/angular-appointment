import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppointmentRoutingModule } from './appointment-routing.module';
import { AppointmentComponent } from './appointment.component';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { ScheduleSmartComponent } from './container/schedule-smart.component';
import { CalendarSmartComponent } from './container/calendar-smart.component';
import { CalendarComponent } from './components/calendar/calendar.component';
import { ScheduleComponent } from './components/schedule/schedule.component';


@NgModule({
  declarations: [
    AppointmentComponent,
    ScheduleSmartComponent,
    CalendarSmartComponent,
    CalendarComponent,
    ScheduleComponent
  ],
  imports: [
    CommonModule,
    AppointmentRoutingModule,
    MatCardModule,
    MatButtonModule
  ]
})
export class AppointmentModule { }
