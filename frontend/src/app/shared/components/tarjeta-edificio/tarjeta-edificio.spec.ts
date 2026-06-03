import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TarjetaEdificio } from './tarjeta-edificio';

describe('TarjetaEdificio', () => {
  let component: TarjetaEdificio;
  let fixture: ComponentFixture<TarjetaEdificio>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TarjetaEdificio],
    }).compileComponents();

    fixture = TestBed.createComponent(TarjetaEdificio);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
