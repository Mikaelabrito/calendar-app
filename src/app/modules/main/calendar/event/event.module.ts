import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventComponent } from './event.component';
import { DayComponent } from './day/day.component';
import { MonthComponent } from './month/month.component';
import { WeekComponent } from './week/week.component';
import { YearComponent } from './year/year.component';
import { SharedModule } from 'src/app/modules/shared/shared.module';
import { MaterialModule } from 'src/app/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ModalComponent } from './modal/modal.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NgxMatTimepickerModule } from 'ngx-mat-timepicker';

@NgModule({
  declarations: [
    DayComponent,
    WeekComponent,
    MonthComponent,
    YearComponent,
    EventComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MaterialModule,
    DragDropModule,
    MatListModule,
    BrowserAnimationsModule,
    FormsModule,
    NgxMatTimepickerModule,
    ReactiveFormsModule
  ],
  exports: [
    DayComponent,
    WeekComponent,
    MonthComponent,
    YearComponent,
    EventComponent,
    ModalComponent
  ]
})
export class EventModule { }
