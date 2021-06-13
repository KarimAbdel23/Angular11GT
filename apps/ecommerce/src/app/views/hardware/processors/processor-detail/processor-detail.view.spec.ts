import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorDetailView } from './processor-detail.view';

describe('ProcessorDetailView', () => {
  let component: ProcessorDetailView;
  let fixture: ComponentFixture<ProcessorDetailView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorDetailView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorDetailView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
