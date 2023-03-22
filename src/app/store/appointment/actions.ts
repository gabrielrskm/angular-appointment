import { createAction } from '@ngrx/store';

export const getAppointments = createAction('[Appointment] Get Appointments');
export const addAppointentTurn = createAction(
  '[Appointment] Add Appointent Turn'
);
export const removeAppointentTurn = createAction(
  '[Appointment] Remove Appointent Turn'
);
