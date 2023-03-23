import { createAction,props } from '@ngrx/store';
import { Appointment } from 'src/app/core/models/appointment.model';

export const getAppointments = createAction('[Appointment] Get Appointments');

export const addAppointmentTurn = createAction(
  '[Appointment] Add Appointent Turn',
  props<{ appointment: Appointment[] }>()
);
export const removeAppointmentTurn = createAction(
  '[Appointment] Remove Appointent Turn',
  props<{ appointment: Appointment[] }>()
);


export const setDataAppointment = createAction(
  '[Appointment] set data appointment',
  props<{ value: string }>()
);