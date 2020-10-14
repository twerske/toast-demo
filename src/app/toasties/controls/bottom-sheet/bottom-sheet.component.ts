import { Component, OnInit, Input } from '@angular/core';
import { MatBottomSheetRef } from '@angular/material/bottom-sheet';
import { Toast } from 'src/app/toast';

@Component({
  selector: 'app-bottom-sheet',
  templateUrl: './bottom-sheet.component.html',
  styleUrls: ['./bottom-sheet.component.scss']
})
export class BottomSheetComponent implements OnInit {
  constructor(private bottomSheetRef: MatBottomSheetRef<BottomSheetComponent>) {}

  ngOnInit(): void {
  }

  openLink(event: MouseEvent): void {
    this.bottomSheetRef.dismiss();
    event.preventDefault();
  }
}
