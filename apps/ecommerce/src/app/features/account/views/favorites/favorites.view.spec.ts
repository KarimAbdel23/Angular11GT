import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FavoritesView } from './favorites.view';

describe('FavoritesView', () => {
  let component: FavoritesView;
  let fixture: ComponentFixture<FavoritesView>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FavoritesView ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FavoritesView);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
