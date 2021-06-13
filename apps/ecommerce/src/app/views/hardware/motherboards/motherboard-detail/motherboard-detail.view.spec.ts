import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardDetailView } from './motherboard-detail.view';

describe('MotherboardDetailView', () => {
  let component: MotherboardDetailView;
  let fixture: ComponentFixture<MotherboardDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
