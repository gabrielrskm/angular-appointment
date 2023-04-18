import { Component, OnDestroy, OnInit, inject } from '@angular/core';
import { CalendarInterface, CalendarObject } from '../components/calendar/calendar.component';
import { Store } from '@ngrx/store';
import { DatabaseService } from 'src/app/core/firebase/database.service';
import { selectDayAppointment } from 'src/app/store/appointments/selector';
import { Subscription, filter } from 'rxjs';
import { formatDate } from '@angular/common';
import { setSelectDayAppointemt } from 'src/app/store/appointments/actions';





@Component({
    selector: 'app-calendar-smart',
    template: `<app-calendar [dataList]="valueList" (selectDay)="selecDay($event)"></app-calendar>`
})

export class CalendarSmartComponent implements OnInit, OnDestroy {

    serviceData = inject(DatabaseService);
    store = inject(Store);
    valueList: CalendarInterface[] | null = null;
    subscription: Subscription | null = null;

    ngOnInit() {

        this.subscription = this.store.select(selectDayAppointment).pipe(
            filter((data) => data.length > 0)
        ).subscribe(
            (data: Array<string>) => {

                let array: CalendarInterface[] = [];
                data.forEach((element: string) => {
                    const obj = new CalendarObject(
                        formatDate(element, 'EEEE', 'en-US'),
                        parseInt(formatDate(element, 'd', 'en-US')),
                        formatDate(element, 'MMMM', 'en-US'),
                        parseInt(formatDate(element, 'YYYY', 'en-US'))
                    )
                    array.push(obj);
                })
                this.valueList = array;

                
            }
        )

    }

    ngOnDestroy(): void {
        this.subscription?.unsubscribe();
    }

    selecDay(id: any) {
        this.store.dispatch(setSelectDayAppointemt({ value:id }));   
    }
}
