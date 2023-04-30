import { Component } from '@angular/core';
import {CdkDragDrop, moveItemInArray} from '@angular/cdk/drag-drop';

@Component({
  selector: 'app-drag-and-drop',
  templateUrl: './drag-and-drop.component.html',
  styleUrls: ['./drag-and-drop.component.scss']
})
export class DragAndDropComponent {
  currentDate: Date = new Date();

  movies = [
    this.currentDate,
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
    '',
  ];

  items = [
    { coluna1: 'Valor 1', coluna2: 'Valor 2', coluna3: 'Valor 3' },
    // ...
  ];

  drop(event: CdkDragDrop<string[]>) {
    moveItemInArray(this.movies, event.previousIndex, event.currentIndex);
  }
}
