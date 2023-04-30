import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { CalendarComponent } from './calendar.component';
import { DatapickerComponent } from './datapicker/datapicker.component';
import { EventModule } from './event/event.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    DatapickerComponent,
    CalendarComponent,
  ],
  imports: [
    CommonModule,
    MaterialModule,
    EventModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports:[
    DatapickerComponent,
    CalendarComponent,
  ]
})
export class CalendarModule { }
