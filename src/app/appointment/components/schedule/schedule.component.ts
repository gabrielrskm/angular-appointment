import { Component, EventEmitter, Inject, Input, Output, inject } from '@angular/core';
import { MatDialog, MatDialogRef } from '@angular/material/dialog';

export interface ScheduleInterface {
   hourRange: string;
   dayString: string;
   aviable: number;
   total: number;
}

export class ScheduleObject {
   constructor(
      public hourRange: string,
      public dayString: string,
      public aviable: number,
      public total: number
   ) {}
}

  

@Component({
   selector: 'app-schedule',
   templateUrl: './schedule.component.html',
   styleUrls: ['./schedule.component.scss'],
})
    
export class ScheduleComponent {
    selected: boolean = true;
    @Input() list: ScheduleInterface[] = [];
    @Output() selectItem = new EventEmitter<number>();
    dialog = inject(MatDialog);

    selectItemEvent(value: number) {
      const dialogRef = this.dialog.open(ScheduleDialogComponent, {
          width: '500px',
      });
      dialogRef.afterClosed().subscribe(result => {
          if (!result) return;
          this.selectItem.emit(value);
          
      });
   }
}


@Component({
    selector: 'app-schedule-dialog',
    template: `<h1 mat-dialog-title>Select Appointment</h1>
    <div mat-dialog-content>
      Would you like to reserve appointment?
    </div>
    <div mat-dialog-actions>
      <button mat-button mat-dialog-close>No</button>
      <button mat-button [mat-dialog-close]="true" cdkFocusInitial>Ok</button>
    </div>`
 })
 export class ScheduleDialogComponent {
    constructor(public dialogRef: MatDialogRef<ScheduleDialogComponent>
    ) { }
 }