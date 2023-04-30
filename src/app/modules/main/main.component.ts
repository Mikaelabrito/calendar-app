import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { AppointmentService } from '../services/appointment.service';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss']
})
export class MainComponent implements OnInit {
  public retract!: string;
  currentDate: Date = new Date();

  constructor() { }

  ngOnInit() {

  }

}
