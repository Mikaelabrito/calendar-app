import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-select',
  templateUrl: './select.component.html',
  styleUrls: ['./select.component.scss']
})
export class SelectComponent {
  public _selected: any = false;
  public listOptions: any = [
    {
      name: 'Day',
      value: 'D',
    },
    {
      name: 'Week',
      value: 'W',
    },
    {
      name: 'Month',
      value: 'M',
    },
    {
      name: 'Year',
      value: 'Y',
    },
  ];

  @Output() onSelected: EventEmitter<any> = new EventEmitter();

  selectItem(item: any){
    item.checked = !item.checked;
      this._selected = true;
      this.onSelected.emit(item);
  }
}
