import { createReducer, on } from '@ngrx/store';
import { loadAppointment, loadAppointmentSuccess, setSelectDayAppointemt } from './actions';
import { TurnInterface } from 'src/app/core/firebase/database.service';

export interface AppointmentState{
  list: TurnInterface[];
  daySelect: number;
}

export const initialState: AppointmentState = {

  list: [],
  daySelect: 0
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
  }),
  on (setSelectDayAppointemt, (state, {value}) => {
    return {
      ...state, daySelect: value
    };
  })
  
);
