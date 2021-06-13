import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorsView } from './processors.view';

describe('ProcessorsView', () => {
  let component: ProcessorsView;
  let fixture: ComponentFixture<ProcessorsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
