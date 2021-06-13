import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MotherboardPlantillaComponent } from './motherboard-plantilla.component';

describe('MotherboardPlantillaComponent', () => {
  let component: MotherboardPlantillaComponent;
  let fixture: ComponentFixture<MotherboardPlantillaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MotherboardPlantillaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MotherboardPlantillaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
