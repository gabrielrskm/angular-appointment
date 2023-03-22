
import { ActionReducerMap } from '@ngrx/store';
import { AppointmentState } from './appointment/reducers';
import { UserState } from './users/reducers';
import { userReducer } from './users/reducers';
import { appointmentReducer } from './appointment/reducers';

export interface AppState {
  user: UserState;
  appointment: AppointmentState;
  
}

export const ROOT_REDUCERS : ActionReducerMap <AppState> = {
  user : userReducer,
  appointment : appointmentReducer
  
  }
