import { createFeatureSelector, createSelector } from '@ngrx/store';
import { AppointmentState } from './reducers';
import { TurnInterface } from 'src/app/core/firebase/database.service';

export const selectAppointmentState =
  
  createFeatureSelector<AppointmentState>('appointment');




//this selector is used to get the list of unique days of appointment
export const selectDayAppointment = createSelector(
  selectAppointmentState,
  (state) => {
    let uniqueDay: Array<string> = [];
    const list: Array<TurnInterface> = state.list;
    list.forEach((element:any) => {
      if (!uniqueDay.includes(element.date)) {
        uniqueDay.push(element.date);
      }
    })
    return uniqueDay;
  }
)


export const selectSelectDayAppointment = createSelector(
  selectAppointmentState,
  selectDayAppointment,
  (state,dayList) => {
    const day: string = dayList[state.daySelect];
    const list: Array<TurnInterface> = state.list;
    if (list.length === 0 || day === undefined) return null;
    return list.filter(value => value.date === day);
  }
)
    
  
