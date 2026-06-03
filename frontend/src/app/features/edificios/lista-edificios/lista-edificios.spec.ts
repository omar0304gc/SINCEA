import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaEdificios } from './lista-edificios';

describe('ListaEdificios', () => {
  let component: ListaEdificios;
  let fixture: ComponentFixture<ListaEdificios>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ListaEdificios],
    }).compileComponents();

    fixture = TestBed.createComponent(ListaEdificios);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
