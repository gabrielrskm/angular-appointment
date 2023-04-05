import { Component, OnInit } from '@angular/core';
import { CalendarInterface } from '../components/calendar/calendar.component';


@Component({
    selector: 'app-calendar-smart',
    template: `<app-calendar [dataList]="valueList"></app-calendar>`
})

export class CalendarSmartComponent implements OnInit {

    valueList: CalendarInterface[] | null = [
        {
            dayOfWeek: "Saturday",
            numberDay: 28,
            month: "May",
            year: 2023
        },
        {
            dayOfWeek: "Sunday",
            numberDay: 29,
            month: "May",
            year: 2023
        },
        {
            dayOfWeek: "Monday",
            numberDay: 30,
            month: "May",
            year: 2023
        },
        {
            dayOfWeek: "Tuesday",
            numberDay: 31,
            month: "May",
            year: 2023  
        },  
        {
            dayOfWeek: "Wednesday",
            numberDay: 1,
            month: "May",
            year: 2023
        }
    ];
    
    constructor() { }

    ngOnInit() { }
}