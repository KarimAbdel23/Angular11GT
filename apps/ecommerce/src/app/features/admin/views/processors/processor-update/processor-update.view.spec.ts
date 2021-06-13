import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorUpdateView } from './processor-update.view';

describe('ProcessorUpdateView', () => {
  let component: ProcessorUpdateView;
  let fixture: ComponentFixture<ProcessorUpdateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorUpdateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorUpdateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
