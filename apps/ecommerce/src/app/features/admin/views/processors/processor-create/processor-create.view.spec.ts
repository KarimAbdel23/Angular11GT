import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProcessorCreateView } from './processor-create.view';

describe('ProcessorCreateView', () => {
  let component: ProcessorCreateView;
  let fixture: ComponentFixture<ProcessorCreateView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProcessorCreateView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProcessorCreateView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
