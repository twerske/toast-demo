import { Component, OnInit, Input } from '@angular/core';
import { Toast, SliceStyle } from 'src/app/toast';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-toast',
  templateUrl: './toast.component.html',
  styleUrls: ['./toast.component.scss']
})
export class ToastComponent implements OnInit {
  @Input() toast: Toast;

  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {
  }

  public get sliceStyle(): typeof SliceStyle {
    return SliceStyle;
  }

  getDarkMode(): boolean {
    return this.overlayContainer.getContainerElement().classList.contains('dark-theme');
  }
}
