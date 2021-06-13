import { ComponentFixture, TestBed } from '@angular/core/testing';

import { OpinionsView } from './opinions.view';

describe('OpinionsView', () => {
  let component: OpinionsView;
  let fixture: ComponentFixture<OpinionsView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ OpinionsView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(OpinionsView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
