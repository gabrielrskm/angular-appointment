import {
   Component,
   Input,
   Output,
   EventEmitter,
   ViewChild,
} from '@angular/core';
import { NgForm } from '@angular/forms';
import { LoginInterface } from '../../interface/login.interface';

@Component({
   selector: 'app-login-form',
   templateUrl: './login-form.component.html',
   styleUrls: ['./login-form.component.scss'],
})
export class LoginFormComponent {
   @Input() title: string = '';
   @Output() loginEvent: EventEmitter<LoginInterface> =
      new EventEmitter<LoginInterface>();

   @ViewChild('myForm') myForm!: NgForm;

   initForm = {
      email: '',
      pass: '',
   };

   constructor() {}
   clickForm() {
      this.loginEvent.emit({
         email: this.myForm.controls['user'].value,
         password: this.myForm.controls['pass'].value,
      });
   }
}
