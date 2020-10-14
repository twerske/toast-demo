import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ToastiesComponent } from './toasties.component';

describe('ToastiesComponent', () => {
  let component: ToastiesComponent;
  let fixture: ComponentFixture<ToastiesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ToastiesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ToastiesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
