import { Component, Inject } from '@angular/core';
import { FacadeService } from '../core/services/facade.service';

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
  private storeService = Inject(FacadeService);
  
  ngOnInit(): void {
    
  }

}
