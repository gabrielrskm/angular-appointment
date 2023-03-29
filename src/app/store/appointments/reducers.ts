import { createReducer, on } from '@ngrx/store';
import { UserInterface } from '../../core/interface/user.interface';


// export const initialState: UserInterface = {
//   id: '',
//   email: '',
//   name: 'unknow',
//   role: 'client',
//   provider: '',
//   login: 'not login',
//   tokken: 'NOT TOKEN',
// };



// export const userReducer = createReducer(
//   initialState,
//   on(loginSucces, (state, { user }) => {

//     localStorage.setItem('user', JSON.stringify(user));
//     return {
//       ...state,
//       id: '',
//       email: user.email,
//       name: user.name,
//       role: user.role,
//       provider: user.provider,
//       login:  user.login,
//       tokken: user.tokken,
//     };
//   }),
// );
