import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardsView } from './motherboards.view';

describe('MotherboardsView', () => {
  let component: MotherboardsView;
  let fixture: ComponentFixture<MotherboardsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
