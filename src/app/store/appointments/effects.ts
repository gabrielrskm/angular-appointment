import { inject, Injectable } from '@angular/core';
import { Actions, createEffect, ofType } from '@ngrx/effects';
import { exhaustMap, filter, map, switchMap, tap } from 'rxjs/operators';
import { loadAppointment, loadAppointmentSuccess } from './actions';
import { DatabaseService } from 'src/app/core/firebase/database.service';
import { Observable, of } from 'rxjs';
import { AppointmentInterface } from 'src/app/core/interface/appointment.interface';

@Injectable()
export class AppointmentEffects {

  private actions$  = inject(Actions);
  private fireService = inject(DatabaseService);


  database$ = createEffect(() => this.actions$.pipe(
    ofType(loadAppointment),
    exhaustMap( () => {
      
      const date = new Date();
      date.setFullYear(2023,2,1)
      const res : Observable<any>=                       
        this.fireService.readDataQueryTurn(date).pipe(
                     
        filter((data) => data.length > 0),
          map((data: Array<any>) => {
          const value: AppointmentInterface[] = data
          return loadAppointmentSuccess({ value });
        })
      )
      return res;

    })
    )
  );

}
