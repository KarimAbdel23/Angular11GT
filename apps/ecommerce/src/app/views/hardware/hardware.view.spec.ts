import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HardwareView } from './hardware.view';

describe('HardwareView', () => {
  let component: HardwareView;
  let fixture: ComponentFixture<HardwareView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HardwareView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HardwareView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
