import { createAction,props } from '@ngrx/store';
import { Appointment } from 'src/app/core/models/appointment.model';

export const getAppointments = createAction('[Appointment] Get Appointments');
export const addAppointentTurn = createAction(
  '[Appointment] Add Appointent Turn',
  props<{ appointment: Appointment[] }>()
);
export const removeAppointentTurn = createAction(
  '[Appointment] Remove Appointent Turn',
  props<{ appointment: Appointment[] }>()
);
