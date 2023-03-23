
import { ActionReducerMap } from '@ngrx/store';
import { UserState } from '../core/interface/user.interface';
import { userReducer } from './users/reducers';
import { appointmentReducer } from './appointment/reducers';
import { AppointmentStateInterface } from '../core/interface/appointment.interface';

export interface AppState {
  user: UserState;
  appointment: AppointmentStateInterface;
  
}

export const ROOT_REDUCERS : ActionReducerMap <AppState> = {
  user : userReducer,
  appointment : appointmentReducer
  }
