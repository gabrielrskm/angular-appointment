import { createReducer, on } from '@ngrx/store';
import {
  addUser,
  removeUser,
  updateUser,
  loadUsersSuccess,
  loadUsersFailure,
} from './actions';
import { User } from '../../models/user.model';

export interface UserState {
  users: User[];
  loading: boolean;
  error: any;
}

export const initialState: UserState = {
  users: [],
  loading: false,
  error: null,
};

export const userReducer = createReducer(
  initialState,
  on(addUser, (state, { user }) => ({
    ...state,
    users: [...state.users, user],
  })),
  on(removeUser, (state, { userId }) => ({
    ...state,
    users: state.users.filter((user) => user.id !== userId),
  })),
  on(updateUser, (state, { user }) => ({
    ...state,
    users: state.users.map((u) => (u.id === user.id ? user : u)),
  })),
  on(loadUsersSuccess, (state, { users }) => ({
    ...state,
    users: users,
    loading: false,
  })),
  on(loadUsersFailure, (state, { error }) => ({
    ...state,
    error: error,
    loading: false,
  }))
);
