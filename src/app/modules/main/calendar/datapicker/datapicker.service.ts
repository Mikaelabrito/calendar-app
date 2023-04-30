import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DatapickerService {
  private dataSelecionadaSource = new BehaviorSubject<Date>(new Date());
  dataSelecionada$ = this.dataSelecionadaSource.asObservable();

  updateDateSelected(data: Date) {
    this.dataSelecionadaSource.next(data);
  }
}
