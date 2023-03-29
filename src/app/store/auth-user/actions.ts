import { createAction, props } from '@ngrx/store';
import { UserInterface } from 'src/app/core/interface/user.interface';

export const loginUserWithEmail = createAction(
  '[Auth-User] Login User With Email',
  props<{ email: string ,password :string }>()
);

export const loginUserWithPopUp = createAction(
  '[Auth-User] Login User With Pop Up',
  props<{ user: UserInterface }>()
);

export const logoutUser = createAction(
  '[Auth-User] Logout User',
  props<{ user: UserInterface }>()
);

export const createUser = createAction(
  '[Auth-User] Create User',
  props<{ user: UserInterface }>()
);

export const loginSucces  = createAction(
  '[Auth-User] Login Succes',
  props<{ user: UserInterface }>()
)

export const loginFailure  = createAction(
  '[Auth-User] Login Failure',
  props<{ message: string }>()
)

export const canLogin = createAction(
  '[Auth-User] Can Login'
)
