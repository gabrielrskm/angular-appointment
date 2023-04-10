import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../core/firebase/auth.service';
import { Store } from '@ngrx/store';
import { loadAppointment } from '../store/appointments/actions';

interface Calendar {
  dayOfWeek: string,
  numberDay: number,
  month: string,
  year: number
}

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.scss']
})
export class AppointmentComponent {

  calendar = new Array<Calendar>();
  fireService = inject(AuthService);
  store = inject(Store);
  router = inject(Router);
  
  ngOnInit(): void {

    this.store.dispatch(loadAppointment());
  }

  logOutClick() {
    this.fireService.logOut().then(() => {
      this.router.navigate(['/']);
    });

  }
}
