import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardCreateView } from './motherboard-create.view';

describe('MotherboardCreateView', () => {
  let component: MotherboardCreateView;
  let fixture: ComponentFixture<MotherboardCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
