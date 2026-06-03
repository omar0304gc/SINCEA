import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaProfesores } from './lista-profesores';

describe('ListaProfesores', () => {
  let component: ListaProfesores;
  let fixture: ComponentFixture<ListaProfesores>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaProfesores],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaProfesores);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
