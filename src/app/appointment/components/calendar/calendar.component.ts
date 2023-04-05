import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

export interface CalendarInterface {
    dayOfWeek: string,
    numberDay: number,
    month: string,
    year: number
}

@Component({
    selector: 'app-calendar',
    templateUrl: 'calendar.component.html',
    styleUrls: ['./calendar.component.scss']
})

export class CalendarComponent implements OnInit {

    @Input() dataList: CalendarInterface[] | null = null;
    dataContent: boolean = false;
    
    @Output() selectDay = new EventEmitter<CalendarInterface>();

    ngOnInit() { 
        if(this.dataList) {
            this.dataContent = true;
        }
        else this.dataContent = false;
    }

    selectDayClick(event:number) {
        this.selectDay.emit(this.dataList?.[event]);
    }
}