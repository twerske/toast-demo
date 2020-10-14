import { Component, OnInit, Input } from '@angular/core';
import { Toast, TOASTS } from 'src/app/toast';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-toasties',
  templateUrl: './toasties.component.html',
  styleUrls: ['./toasties.component.scss']
})
export class ToastiesComponent implements OnInit {

  constructor(private overlayContainer: OverlayContainer) {}

  // Array of toasts TODO: refactor to create a service
  toasts: Toast[] = TOASTS;

  makeToast(toast: Toast | null): void {
    this.toasts.unshift(toast);
  }

  resetToast(): void {
    this.toasts = [];
  }

  ngOnInit(): void {
  }

  getDarkMode(): {} {
    return this.overlayContainer.getContainerElement().classList.contains('dark-theme');
  }

}

