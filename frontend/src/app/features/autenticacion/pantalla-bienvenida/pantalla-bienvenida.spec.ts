import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PantallaBienvenida } from './pantalla-bienvenida';

describe('PantallaBienvenida', () => {
  let component: PantallaBienvenida;
  let fixture: ComponentFixture<PantallaBienvenida>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PantallaBienvenida],
    }).compileComponents();

    fixture = TestBed.createComponent(PantallaBienvenida);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
