import { Component } from '@angular/core';

@Component({
  selector: 'app-sigin',
  template: `<app-sigin-form (myEvent)="sigIn($event)"></app-sigin-form>`
})
export class SiginComponent {

  sigIn(value: any) { 
    console.log('entro al evento');
  }

}
