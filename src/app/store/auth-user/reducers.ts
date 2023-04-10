import { createReducer, on } from '@ngrx/store';
import { UserInterface } from '../../core/interface/user.interface';
import { loginSucces, loginFailure } from './actions';


export const initialState: UserInterface = {
  id: '',
  email: '',
  name: 'unknow',
  role: 'client',
  provider: '',
  login: 'not login',
  tokken: 'NOT TOKEN',
};



export const userReducer = createReducer(
  initialState,
  on(loginSucces, (state, { user }) => {

    return {
      ...state,
      id: '',
      email: user.email,
      name: user.name,
      role: user.role,
      provider: user.provider,
      login:  user.login,
      tokken: user.tokken,
    };
  }),
  on(loginFailure, (state,{message}) => {
    return {
      ...state,
      id: '',
      email: '',
      password: '',
      name: 'unknow',
      role: 'client',
      provider: '',
      login: message,
      tokken: 'NOT TOKEN',
    };
  })
);
