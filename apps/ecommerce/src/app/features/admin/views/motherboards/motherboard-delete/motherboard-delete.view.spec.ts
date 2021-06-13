import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardDeleteView } from './motherboard-delete.view';

describe('MotherboardDeleteView', () => {
  let component: MotherboardDeleteView;
  let fixture: ComponentFixture<MotherboardDeleteView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardDeleteView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardDeleteView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
