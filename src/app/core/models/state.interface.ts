
import { Appointment } from "./appointment.model";
import { User } from "./user.model";
import { UserList } from './userList.model';

export interface StateModel  {
  appointments: Appointment[];
  user: User;
  userList  : UserList;
  loadStatus: 'NOT_LOADED' | 'LOADING' | 'LOADED';
}