import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ContenedorPrincipal } from './contenedor-principal';

describe('ContenedorPrincipal', () => {
  let component: ContenedorPrincipal;
  let fixture: ComponentFixture<ContenedorPrincipal>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ContenedorPrincipal],
    }).compileComponents();

    fixture = TestBed.createComponent(ContenedorPrincipal);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
