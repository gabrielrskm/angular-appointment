import { Component, EventEmitter, Input, Output } from '@angular/core';

    
export interface ScheduleInterface {
    hourRange: string;
    dayString: string;
    aviable: number;
    total: number;
    
}

@Component ({
    selector: 'app-schedule',
    templateUrl: './schedule.component.html',
    styleUrls: ['./schedule.component.scss']
})
export class ScheduleComponent {

    selected: boolean = true;
    @Input() list: ScheduleInterface[] = [];
    @Output() selectItem = new EventEmitter<number>();
    selectItemEvent(value : number) {
        this.selectItem.emit(value);
    }

    
}