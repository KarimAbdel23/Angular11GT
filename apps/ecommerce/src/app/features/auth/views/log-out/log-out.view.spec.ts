import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogOutView } from './log-out.view';

describe('LogOutView', () => {
  let component: LogOutView;
  let fixture: ComponentFixture<LogOutView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogOutView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogOutView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
