import { ComponentFixture, TestBed } from '@angular/core/testing';

import { HelpView } from './help.view';

describe('HelpView', () => {
  let component: HelpView;
  let fixture: ComponentFixture<HelpView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ HelpView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(HelpView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
