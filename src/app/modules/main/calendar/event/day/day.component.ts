import { CdkDragDrop, moveItemInArray } from '@angular/cdk/drag-drop';
import {Component, Inject} from '@angular/core';
import { MAT_DIALOG_DATA, MatDialog } from '@angular/material/dialog';
import { ModalComponent } from '../modal/modal.component';
import { ModalService } from '../modal/modal.service';
import { AppointmentService } from 'src/app/modules/services/appointment.service';

@Component({
  selector: 'app-day',
  templateUrl: './day.component.html',
  styleUrls: ['./day.component.scss']
})
export class DayComponent {
  currentDate: Date = new Date();
  horas: number[] = [];
  movies: any = [];
  displayedColumns: string[] = ['position', 'name'];
  dataSource = this.horas;
  appoiment !: string;
  open: boolean = false;
  dateFilter = new Date();
  draggingIndex: number | null = null;

  selectedDate!: Date;
  selectedHour!: string;

  modalData: any;

  public rowClicked: any;
  public selectedIndex : number = -1;

  constructor(public dialog: MatDialog, private _modalService: ModalService, private _appointmentService: AppointmentService,) {}

  ngOnInit(){
    for(let i = 0; i < 24; i++) {
      this.horas.push(i);
      this.movies.push(i)
    }
  }

  onDragStarted(index: number) {
    this.draggingIndex = index;
  }

  onDragEnded() {
    this.draggingIndex = null;
  }

  openDialog(enterAnimationDuration: string, exitAnimationDuration: string, i: number): void {
    this.open = true;
    const response = this.dialog.open(ModalComponent, {
      width: '250px',
      enterAnimationDuration,
      exitAnimationDuration,
      data: {selectedDate: this.selectedDate, selectedHour: this.selectedHour},
    });
    response.afterClosed().subscribe(result => {
      if(result){
        this._appointmentService.registerAppointment(result.selectedDate, result.selectedHour);
        this.modalData = result;
      }
    });
    this.selectedIndex = i;
    this.changeRowBackgroundColor(i);
    this._modalService.setSelectedIndex(i);
  }

  changeRowBackgroundColor(i: any){
    if (this.rowClicked === i) this.rowClicked = -1;
    else this.rowClicked = i;
  }

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }

}

