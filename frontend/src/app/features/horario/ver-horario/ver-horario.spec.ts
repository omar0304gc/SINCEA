import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerHorario } from './ver-horario';

describe('VerHorario', () => {
  let component: VerHorario;
  let fixture: ComponentFixture<VerHorario>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [VerHorario],
    }).compileComponents();

    fixture = TestBed.createComponent(VerHorario);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
