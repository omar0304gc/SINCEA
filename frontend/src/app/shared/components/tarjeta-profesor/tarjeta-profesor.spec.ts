import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaProfesor } from './tarjeta-profesor';

describe('TarjetaProfesor', () => {
  let component: TarjetaProfesor;
  let fixture: ComponentFixture<TarjetaProfesor>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaProfesor],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaProfesor);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
