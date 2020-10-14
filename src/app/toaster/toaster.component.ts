import { Component, OnInit } from '@angular/core';
import { OverlayContainer } from '@angular/cdk/overlay';

@Component({
  selector: 'app-toaster',
  templateUrl: './toaster.component.html',
  styleUrls: ['./toaster.component.scss']
})
export class ToasterComponent implements OnInit {
  constructor(private overlayContainer: OverlayContainer) {}

  ngOnInit(): void {}

  getDarkMode(): boolean {
    return this.overlayContainer.getContainerElement().classList.contains('dark-theme');
  }
}
