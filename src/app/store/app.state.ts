import { UserState } from './users/reducers';
import { Appointment } from '../core/models/appointment.model';
import { userReducer } from  './users/reducers';
import { appointmentReducer } from './appointment/reducers';

export interface AppState {

  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
  user: UserState;
  appointment  : Appointment[];
}

export const ROOT_REDUCERS = {

  user : userReducer,
  appointment : appointmentReducer,
  }
