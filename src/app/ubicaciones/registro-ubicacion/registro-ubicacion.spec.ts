import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistroUbicacion } from './registro-ubicacion';

describe('RegistroUbicacion', () => {
  let component: RegistroUbicacion;
  let fixture: ComponentFixture<RegistroUbicacion>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RegistroUbicacion],
    }).compileComponents();

    fixture = TestBed.createComponent(RegistroUbicacion);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
