import { Component, Input } from '@angular/core';
import { DatapickerService } from '../calendar/datapicker/datapicker.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {
  currentDate: Date = new Date();
  selectedDate!: Date;

  @Input() view !: string;

  constructor(private _date: DatapickerService) {}

  changeView(changeView: any){
    this.view = changeView;
  }

  ngOnInit() {
    this._date.dataSelecionada$.subscribe(data => {
      this.selectedDate = data;
    });
  }

}
