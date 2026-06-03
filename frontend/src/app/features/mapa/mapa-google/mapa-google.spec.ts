import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaGoogle } from './mapa-google';

describe('MapaGoogle', () => {
  let component: MapaGoogle;
  let fixture: ComponentFixture<MapaGoogle>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaGoogle],
    }).compileComponents();

    fixture = TestBed.createComponent(MapaGoogle);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
