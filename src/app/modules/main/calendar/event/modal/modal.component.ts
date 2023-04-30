import { Component, EventEmitter, Inject, Input, Output } from '@angular/core';
import { FormControl } from '@angular/forms';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

export interface DialogData {
  selectedDate: Date;
  selectedHour: string;
}

@Component({
  selector: 'modal',
  templateUrl: 'modal.component.html',
  styleUrls: ['modal.component.scss']
})
export class ModalComponent{
  currentDate: Date = new Date();
  dateFilter = new Date();

  date = new FormControl(new Date());
  serializedDate = new FormControl(new Date().toISOString());

  public selectedDate!: Date;
  public selectedHour!: string;
  selectedIndex: number = 0;

  constructor(
    public dialogRef: MatDialogRef<ModalComponent>,
    @Inject(MAT_DIALOG_DATA) public data: DialogData,) {
  }

  onNoClick(): void {
    this.dialogRef.close();
  }

}


