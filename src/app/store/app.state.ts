
import { ActionReducerMap } from '@ngrx/store';
import { UserInterface} from '../core/interface/user.interface';
import { userReducer } from './auth-user/reducers';

export interface AppState {
  user: UserInterface;
  
}

export const ROOT_REDUCERS : ActionReducerMap <AppState> = {
  user : userReducer
  }
