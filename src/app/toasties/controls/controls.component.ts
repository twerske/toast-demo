import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { Toast, SliceStyle } from 'src/app/toast';
import { BottomSheetComponent } from './bottom-sheet/bottom-sheet.component';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-controls',
  templateUrl: './controls.component.html',
  styleUrls: ['./controls.component.scss']
})
export class ControlsComponent implements OnInit {
  @Output() makeToast = new EventEmitter<Toast | null>();
  @Output() resetToast = new EventEmitter<null>();

  step = 0;
  bread = 'Sourdough';
  toasted: number;
  buttered: boolean;
  sliced = false;
  diagonal = false;
  jam = new FormControl();
  jamList: string[] = ['Strawberry', 'Blueberry', 'Huckleberry', 'Rhubarb', 'Lemon Curd'];
  toppings = new FormControl();
  toppingList: string[] = ['Avocado', 'Pepper', 'Salt', 'Cinnamon', 'Sugar'];

  constructor(private bottomSheet: MatBottomSheet) {}

  openBottomSheet(): void {
    this.bottomSheet.open(BottomSheetComponent);
  }

  ngOnInit(): void {
    this.toasted = 3;
  }

  // Function to add new toast
  generateToast(): void {
    this.makeToast.emit({
        bread: this.bread,
        toasted: this.toasted,
        buttered: this.buttered,
        jam: this.jam.value,
        toppings: this.toppings.value,
        sliced: this.getSliceStyle()
    });
  }

  getSliceStyle(): SliceStyle {
    if (this.diagonal) {
      return SliceStyle.DIAGONAL;
    } else if (this.sliced) {
      return SliceStyle.REGULAR;
    }
    return SliceStyle.NONE;
  }

  setStep(index: number): void {
    this.step = index;
  }

  nextStep(): void {
    this.step++;
  }

  prevStep(): void {
    this.step--;
  }
}
