import { Component, EventEmitter, Output } from '@angular/core';
import { Filtration } from '../models/filtration';

@Component({
  selector: 'app-filtration-component',
  templateUrl: './filtration-component.component.html',
  styleUrls: ['./filtration-component.component.scss'],
})
export class FiltrationComponentComponent {
  selectors?: Filtration[];
  selection: number = 0;
  @Output()
  selectedValue!: EventEmitter<number>;
  @Output()
  searching!: EventEmitter<String>;
  constructor() {
    this.selectedValue = new EventEmitter<number>();
    this.searching = new EventEmitter<String>();
    this.selectors = [
      { title: 'All', id: 0 },
      { title: 'Filtration by contact name ', id: 1 },
      { title: 'Filtration by contact number ', id: 2 },
    ];
  }
  /*selectValue(selectedValue: String) {
    this.selectedValue.emit(this.selectors);
  }*/
  /*selecting() {
    //console.log(selectId);
    console.log('mm');
  }*/
  myFunction(val: any) {
    //console.log(val);
    this.selectedValue.emit(val);
  }
  clickOnSearch(searchValue: String) {
    //console.log(searchValue);
    this.searching.emit(searchValue);
  }
}
