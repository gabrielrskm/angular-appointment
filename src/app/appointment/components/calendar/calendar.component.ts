import { Component, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';


export interface CalendarInterface {
    dayOfWeek: string,
    numberDay: number,
    month: string,
    year: number
}

export class CalendarObject implements CalendarInterface {
    dayOfWeek: string;
    numberDay: number;
    month: string;
    year: number
    constructor(dayOfWeek: string, numberDay: number, month: string, year: number){
        this.dayOfWeek = dayOfWeek;
        this.numberDay = numberDay;
        this.month = month;
        this.year = year
    }
}

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit,OnChanges{

    @Input() dataList: CalendarInterface[] | null = null;
    dataContent: boolean = true;
    
    @Output() selectDay = new EventEmitter<CalendarInterface>();

    ngOnInit() { 
        if(this.dataList) {
            this.dataContent = true;
        }
        else this.dataContent = false;
    }

    ngOnChanges(): void {
        if(this.dataList) {
            this.dataContent = true;
        }
        else this.dataContent = false;
    }

    selectDayClick(event:number) {
        this.selectDay.emit(this.dataList?.[event]);
    }
}