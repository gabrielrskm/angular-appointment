import { Component, Input } from '@angular/core';


@Component({
  selector: 'app-pop-up',
  template: `<app-pop-up-form (buttonEvent)="login($event)"
                              type = "{{type}}"
                              ></app-pop-up-form> `
})
export class PopUpComponent {

  @Input() type : string  = '';

    login(value: any) { 
       console.log('entro al evento ' + this.type);
    }

}