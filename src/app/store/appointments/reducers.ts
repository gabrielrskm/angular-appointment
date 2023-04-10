import { createReducer, on } from '@ngrx/store';
import { AppointmentInterface } from '../../core/interface/appointment.interface';
import { loadAppointment, loadAppointmentSuccess } from './actions';

export interface AppointmentState{
  list : AppointmentInterface[];
}

export const initialState: AppointmentState = {

  list : []
}

export const appointmentReducer = createReducer(
   initialState,
  on(loadAppointment, (state) => {
      
      return { ...state, };
   }),
  on(loadAppointmentSuccess, (state, {value}) => {

    return {
      ...state, list : value
    };
   })
);
