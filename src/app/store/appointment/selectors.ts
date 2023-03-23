import { createSelector } from '@ngrx/store';
import { AppointmentStateInterface } from 'src/app/core/interface/appointment.interface';
import { AppState } from '../app.state';

export const selectAppointmentState = (state: AppState) => state.appointment;

export const selectAppointments = createSelector(
  selectAppointmentState,
  (state : AppointmentStateInterface) =>{
    return {
      appointments: state.appointments,
      canLoad: state.loadStatus
    }
  }
)
