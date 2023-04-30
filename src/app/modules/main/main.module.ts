import { HeaderComponent } from './header/header.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MaterialModule } from 'src/app/material.module';
import { MainComponent } from './main.component';
import { CalendarModule } from './calendar/calendar.module';
import { SharedModule } from '../shared/shared.module';
import { FlexLayoutModule } from '@angular/flex-layout';

@NgModule({
  declarations: [
    HeaderComponent,
    MainComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    CalendarModule,
    SharedModule,
    FlexLayoutModule
  ],
  exports: [
    HeaderComponent,
    MainComponent
  ],
  providers: []
})
export class MainModule { }
