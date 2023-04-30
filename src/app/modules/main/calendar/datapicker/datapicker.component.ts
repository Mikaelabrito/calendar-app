import { Component, OnInit } from '@angular/core';
import { DatapickerService } from './datapicker.service';

@Component({
  selector: 'app-datapicker',
  templateUrl: './datapicker.component.html',
  styleUrls: ['./datapicker.component.scss']
})
export class DatapickerComponent {
  public selected!: Date | null;
  public selectedDate!: Date;

  constructor(private _date: DatapickerService) {}

  showDateSelected() {
    this._date.updateDateSelected(this.selectedDate);
  }
}
