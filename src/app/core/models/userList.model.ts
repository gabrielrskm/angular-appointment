import { UserInterface } from "../interface/user.interface";

export class UserList {
  list: Array<UserInterface>;

  constructor(list: Array<UserInterface>) {
    this.list = list;
  }
}