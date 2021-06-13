import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardUpdateView } from './motherboard-update.view';

describe('MotherboardUpdateView', () => {
  let component: MotherboardUpdateView;
  let fixture: ComponentFixture<MotherboardUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
