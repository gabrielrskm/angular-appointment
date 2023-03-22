import { createReducer,on } from "@ngrx/store";
import{
  getAppointments,
  addAppointentTurn
} from "./actions";

export interface AppointmentState{
  appointments:Array<any>;
  loading:boolean;
  error:any;
  
}

export const initialState : AppointmentState = {
  appointments: [],
  loading: false,
  error: null,
}
export const appointmentReducer = createReducer(
  initialState,
  on(getAppointments, (state) => { 
    return{...state, loading: true}
  }),
  on(addAppointentTurn, (state) => {
    return state
  })
);