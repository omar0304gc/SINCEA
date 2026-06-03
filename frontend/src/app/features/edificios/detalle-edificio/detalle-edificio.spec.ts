import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleEdificio } from './detalle-edificio';

describe('DetalleEdificio', () => {
  let component: DetalleEdificio;
  let fixture: ComponentFixture<DetalleEdificio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleEdificio],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleEdificio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
