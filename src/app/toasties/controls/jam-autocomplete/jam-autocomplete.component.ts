import { COMMA, ENTER } from '@angular/cdk/keycodes';
import { Component, OnInit, Output, EventEmitter, Input, OnChanges, ViewChild, ElementRef } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from 'rxjs';
import { map, startWith } from 'rxjs/operators';
import { MatChipInputEvent } from '@angular/material/chips';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';

@Component({
  selector: 'app-jam-autocomplete',
  templateUrl: './jam-autocomplete.component.html',
  styleUrls: ['./jam-autocomplete.component.scss']
})
export class JamAutocompleteComponent implements OnInit {
  @Output() setFlavor = new EventEmitter<string[]>();

  @ViewChild('jamInput') fruitInput: ElementRef<HTMLInputElement>;

  jamControl = new FormControl();
  flavors: string[] = [];
  flavorOptions: string[] = ['Strawberry', 'Blueberry', 'Huckleberry', 'Rhubarb', 'Lemon Curd'];
  filteredOptions: Observable<string[]>;
  separatorKeysCodes: number[] = [ENTER, COMMA];

  // fruitCtrl = new FormControl();
  // filteredFruits: Observable<string[]>;
  // fruits: string[] = ['Lemon'];
  // allFruits: string[] = ['Apple', 'Lemon', 'Lime', 'Orange', 'Strawberry'];

  ngOnInit(): void {
    this.filteredOptions = this.jamControl.valueChanges
      .pipe(
        startWith(''),
        // map(value => this._filter(value))
        map((flavor: string | null) => flavor ? this._filter(flavor) : this.flavorOptions.slice())
      );
  }

  // private _filter(value: string): string[] {
  //   const filterValue = value?.toLowerCase();

  //   return this.flavorOptions.filter(option => option.toLowerCase().includes(filterValue));
  // }

  constructor() {
    // this.filteredOptions = this.jamControl.valueChanges.pipe(
    //     startWith(null),
    //     map((flavor: string | null) => flavor ? this._filter(flavor) : this.flavorOptions.slice()));
  }

  add(event: MatChipInputEvent): void {
    const input = event.input;
    const value = event.value;

    // Add our fruit
    if ((value || '').trim()) {
      this.flavors.push(value.trim());
    }

    // Reset the input value
    if (input) {
      input.value = '';
    }

    this.jamControl.setValue(null);
  }

  remove(flavor: string): void {
    const index = this.flavors.indexOf(flavor);

    if (index >= 0) {
      this.flavors.splice(index, 1);
    }
  }

  selected(event: MatAutocompleteSelectedEvent): void {
    this.flavors.push(event.option.viewValue);
    this.fruitInput.nativeElement.value = '';
    this.jamControl.setValue(null);
  }

  private _filter(value: string): string[] {
    const filterValue = value?.toLowerCase();

    return this.flavorOptions.filter(flavor => flavor.toLowerCase().indexOf(filterValue) === 0);
  }
}
