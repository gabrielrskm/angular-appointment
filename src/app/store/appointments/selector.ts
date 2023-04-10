import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from './reducers';

export const selectAppointmentState =
  
  createFeatureSelector<AppointmentState>('appointment');


export const selecAppointment = createSelector(
  selectAppointmentState,
  (state) => {
    return state.list;
  }
);

export const selectDayAppointment = createSelector(
  selecAppointment,
  (state) => {
    let uniqueDay : Array<any> = [];
    state.forEach((element:any) => {
      if (!uniqueDay.includes(element.fecha)) {
        uniqueDay.push(element.fecha);
      }
    })
    return uniqueDay;
  }
)