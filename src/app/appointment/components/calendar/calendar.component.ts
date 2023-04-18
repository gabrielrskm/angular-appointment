import {
    Component, EventEmitter,
    Input, OnChanges, OnInit, Output,
    Renderer2, inject, ElementRef,
    ViewChildren, QueryList, AfterViewChecked 
} from '@angular/core';

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

export class CalendarComponent implements OnChanges, OnInit, AfterViewChecked {

    @Input() dataList: CalendarInterface[] | null = null;
    dataContent: boolean = true;
    @Output() selectDay = new EventEmitter<number>();
    renderer = inject(Renderer2)
    index: number = 0;

    @ViewChildren('days') algo: QueryList<ElementRef<HTMLDivElement>> | undefined;

    ngOnInit(): void {
        if (this.dataList) this.selectDay.emit(0);  
    }

    ngAfterViewChecked(): void {
        const list = this.algo?.get(this.index)?.nativeElement;
        if(list) this.renderer.setStyle(list, 'background-color', '#d1edee');
    }

    ngOnChanges(): void {
        if(this.dataList) this.dataContent = true;
        else this.dataContent = false;
    }

    selectDayClick(event: number) {
        this.index  = event;
        this.selectDay.emit(event);
    }


}