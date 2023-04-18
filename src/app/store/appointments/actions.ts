import { createAction, props } from '@ngrx/store';
import { TurnInterface } from 'src/app/core/firebase/database.service';

export const loadAppointment = createAction(
  '[Appointments] Load Appointment'
);

export const loadAppointmentSuccess = createAction(
  '[Appointments] Load Appointment Success',
  props<{ value: Array<TurnInterface>}>()
)

export const setSelectDayAppointemt = createAction(
  '[Appointments] Set Select Day Appointment',
  props<{ value: number}>()
)