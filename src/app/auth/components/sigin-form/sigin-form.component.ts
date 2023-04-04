import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-sigin-form',
  templateUrl: './sigin-form.component.html',
  styleUrls: ['./sigin-form.component.scss']
})
export class SiginFormComponent {
  constructor() { }
  @Output() myEvent = new EventEmitter();
  
  signIn( event : any ) {
    this.myEvent.emit(event);
  }

}
