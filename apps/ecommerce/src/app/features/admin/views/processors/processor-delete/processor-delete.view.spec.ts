import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDeleteView } from './processor-delete.view';

describe('ProcessorDeleteView', () => {
  let component: ProcessorDeleteView;
  let fixture: ComponentFixture<ProcessorDeleteView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorDeleteView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorDeleteView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
