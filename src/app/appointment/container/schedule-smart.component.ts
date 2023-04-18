import { Component, OnInit, inject } from '@angular/core';
import { ScheduleInterface } from '../components/schedule/schedule.component';
import { Store } from '@ngrx/store';
import { selectSelectDayAppointment } from 'src/app/store/appointments/selector';
import { filter } from 'rxjs';
import { formatDate } from '@angular/common';

@Component({
    selector: 'app-schedule-smart',
    template: `<app-schedule [list]="list"></app-schedule>`,
})

export class ScheduleSmartComponent implements OnInit {

    store = inject(Store)
    list: ScheduleInterface[] = [ ]
    constructor() { }

    ngOnInit() {
        this.store.select(selectSelectDayAppointment).pipe(
            filter(data => data !== null)
        ).subscribe(data => {
            const tempList: ScheduleInterface[] = [];
            data?.forEach(element => {
                const obj : ScheduleInterface = {
                    hourRange: 'From '+element.init_time + ' to ' + element.end_time,
                    dayString: formatDate(element.date, 'fullDate', 'en-US'),
                    aviable: parseInt(element.aviable),
                    total: parseInt(element.aviable)
                }
                tempList.push(obj);
            })

            this.list = tempList;
        })
    }

    



    

    
}

