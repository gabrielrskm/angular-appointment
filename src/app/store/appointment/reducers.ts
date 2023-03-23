import { createReducer, on, Action } from '@ngrx/store';
import { AppointmentStateInterface } from "src/app/core/interface/appointment.interface";
import{
  getAppointments,
  addAppointmentTurn,
  removeAppointmentTurn,
  setDataAppointment
} from "./actions";
 import { TurnInterface } from '../../core/interface/appointment.interface';

export const initialState : AppointmentStateInterface = {
  appointments: [],
  loadStatus: 'NOT_LOADED'
}
export const appointmentReducer = createReducer(
  initialState,
  on(getAppointments, (state) => { 

    const appointment : TurnInterface= {
      id: '',
      date: '',
      hour_init: '',
      hour_end: '',
      aviable: 0,
      get: false,

    }
    
    return{...state, loadStatus: 'LOADED', appointments: [appointment]}
  }),
  on(setDataAppointment,(state, {value}) => {

    const appointment : TurnInterface= {
      id: value,
      date: '',
      hour_init: '',
      hour_end: '',
      aviable: 0,
      get: false,

    }
    return {...state,appointments:[appointment],loadStatus: 'LOADED'}
  })
);


