import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DragAndDropComponent } from './drag-and-drop/drag-and-drop.component';
import { SelectComponent } from './select/select.component';
import { MaterialModule } from 'src/app/material.module';
import { DragDropModule } from '@angular/cdk/drag-drop';
import { MatListModule } from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
  declarations: [
    DragAndDropComponent,
    SelectComponent
  ],
  imports: [
    CommonModule,
    MaterialModule,
    DragDropModule,
    MatListModule,
    BrowserAnimationsModule
  ],
  exports: [
    DragAndDropComponent,
    SelectComponent
  ]
})
export class SharedModule { }
