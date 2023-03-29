import { createSelector } from '@ngrx/store';
import { AppState } from '../app.state';
import { UserInterface } from '../../core/interface/user.interface';

export const selectUserState = (state: AppState) => state.user;

export const selecCurrentUser = createSelector(
  selectUserState,
  (state : UserInterface ) => {
    return state;
  }
);

export const selectTokken = createSelector(
  selectUserState,
  (state : UserInterface ) => {
    return state.tokken;
  }
);