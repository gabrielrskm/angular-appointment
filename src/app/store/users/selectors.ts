import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserState } from './reducers';

export const selectUserState = (state: AppState) => state.user;

export const selectAllUsers = createSelector(
  selectUserState,
  (state: UserState) => state.users
);

export const selectUserLoading = createSelector(
  selectUserState,
  (state: UserState) => state.loading
);

export const selectUserError = createSelector(
  selectUserState,
  (state: UserState) => state.error
);
