import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ModalService {
  private selectedIndex !: number;

  constructor() {}

  setSelectedIndex(index: number) {
    this.selectedIndex = index;
  }

  getSelectedIndex() {
    return this.selectedIndex;
  }
}
