import { createReducer, on } from '@ngrx/store';
import {
  addUser,
  removeUser,
  updateUser,
  loadUsersSuccess,
  loadUsersFailure,
} from './actions';
import { UserState } from '../../core/interface/user.interface';



export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state) => { 
    return{...state, loading: true}
  })
);
