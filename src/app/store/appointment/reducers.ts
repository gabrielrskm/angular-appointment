import { createReducer,on } from "@ngrx/store";
import { Appointment } from '../../core/models/appointment.model';
import{
  getAppointments,
  addAppointentTurn,
  removeAppointentTurn
} from "./actions";
export const initialState = {
  appointments: [],
  loading: false,
  error: null,
}
export const appointmentReducer = createReducer(
  initialState,
  on(getAppointments, (state) => 
  ({
    ...state,
    appointments: [],
    loading: true
  })),
);