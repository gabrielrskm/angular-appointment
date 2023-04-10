import { Component, OnInit } from '@angular/core';

import { ScheduleInterface } from '../components/schedule/schedule.component';

@Component({
    selector: 'app-schedule-smart',
    template: `<app-schedule [list]="list"></app-schedule>`
})

export class ScheduleSmartComponent implements OnInit {

    list: ScheduleInterface[] = [
        {
            hourRange: "18:00 - 19:00",
            dayString: "Saturday 25 May",
            aviable: 3,
            total: 5
        },
        {
            hourRange: "18:00 - 19:00",
            dayString: "Saturday 25 May",
            aviable: 3,
            total: 5
        },
        {
            hourRange: "18:00 - 19:00",
            dayString: "Saturday 25 May",
            aviable: 3,
            total: 5
        },
        {
            hourRange: "18:00 - 19:00",
            dayString: "Saturday 25 May",
            aviable: 3,
            total: 5
        },
        {
            hourRange: "18:00 - 19:00",
            dayString: "Saturday 25 May",
            aviable: 3,
            total: 5
        }
    ]
    constructor() { }

    ngOnInit() { }

    
}