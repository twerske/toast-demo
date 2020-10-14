import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JamAutocompleteComponent } from './jam-autocomplete.component';

describe('JamAutocompleteComponent', () => {
  let component: JamAutocompleteComponent;
  let fixture: ComponentFixture<JamAutocompleteComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ JamAutocompleteComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JamAutocompleteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
