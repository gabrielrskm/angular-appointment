import { Component, OnInit, NgModule } from '@angular/core';

interface List {
  hour: string;
  minute: string;
  turnRest: number;
}

interface User {
  id: number;
  name?: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent {
  list: List[] = [];
  users: User[] = [];
  userCurrent: number = 0;
  funcion : string = ""
  constructor() {
    for (let i = 8; i <= 20; i++) {
      this.list.push({ hour: i.toString(), minute: '00', turnRest: 8 });
      if (i < 20)
        this.list.push({ hour: i.toString(), minute: '30', turnRest: 8 });
    }

    for (let i = 0; i < 8; i++) {
      this.users.push({ id: i });
    }
  }

  alert(index: number) {
    if (this.list[index].turnRest > 0) {
      this.list[index].turnRest -= 1;
    }
    
  }

  cambiarUsuario(event: Event) {
    this.userCurrent = parseInt((event.target as HTMLInputElement).value);
    let a: string = (<HTMLInputElement>event.target).value;
    console.log(a);
  }
}
