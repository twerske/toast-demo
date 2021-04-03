import {OverlayContainer} from '@angular/cdk/overlay';
import {Component, OnInit} from '@angular/core';
import {Toast, TOASTS} from '../Toast';

@Component({
  selector: 'app-toasties',
  templateUrl: './toasties.component.html',
  styleUrls: ['./toasties.component.scss']
})
export class ToastiesComponent implements OnInit {

  constructor(private overlayContainer: OverlayContainer) {
  }

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

