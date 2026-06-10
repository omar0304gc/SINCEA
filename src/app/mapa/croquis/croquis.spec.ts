import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Croquis } from './croquis';

describe('Croquis', () => {
  let component: Croquis;
  let fixture: ComponentFixture<Croquis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Croquis],
    }).compileComponents();

    fixture = TestBed.createComponent(Croquis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
