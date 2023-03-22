import { UserInterface } from './user.interface';

export interface TurnInterface {
  id : string;
  date : string;
  hour_init : string;
  hour_end : string;
  aviable : number;
  get : boolean;
  users  : Array<UserInterface>;
}