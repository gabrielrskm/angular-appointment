
import { ActionReducerMap } from '@ngrx/store';
import { UserInterface} from '../core/interface/user.interface';
import { userReducer } from './auth-user/reducers';
import { AppointmentState, appointmentReducer } from './appointments/reducers';

export interface AppState {
  user: UserInterface,
  appointment: AppointmentState
  
}

export const ROOT_REDUCERS : ActionReducerMap <AppState> = {
  user: userReducer,
  appointment: appointmentReducer
  }
