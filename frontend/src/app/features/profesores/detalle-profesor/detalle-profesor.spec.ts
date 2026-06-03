import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DetalleProfesor } from './detalle-profesor';

describe('DetalleProfesor', () => {
  let component: DetalleProfesor;
  let fixture: ComponentFixture<DetalleProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [DetalleProfesor],
    }).compileComponents();

    fixture = TestBed.createComponent(DetalleProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
