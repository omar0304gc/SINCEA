import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MapaCroquis } from './mapa-croquis';

describe('MapaCroquis', () => {
  let component: MapaCroquis;
  let fixture: ComponentFixture<MapaCroquis>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [MapaCroquis],
    }).compileComponents();

    fixture = TestBed.createComponent(MapaCroquis);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
