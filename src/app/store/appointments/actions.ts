import { createAction, props } from '@ngrx/store';
import { AppointmentInterface } from 'src/app/core/interface/appointment.interface';

export const loadAppointment = createAction(
  '[Appointments] Load Appointment'
);

export const loadAppointmentSuccess = createAction(
  '[Appointments] Load Appointment Success',
  props<{ value: AppointmentInterface[]}>()
)