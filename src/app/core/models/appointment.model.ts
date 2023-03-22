import { TurnInterface } from '../interface/appointment.interface';

export class Appointment {
  list: Array<TurnInterface>;

  constructor(list: Array<TurnInterface>) {
    this.list = list;
  }
}
