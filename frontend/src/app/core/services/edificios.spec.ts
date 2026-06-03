import { TestBed } from '@angular/core/testing';

import { Edificios } from './edificios';

describe('Edificios', () => {
  let service: Edificios;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Edificios);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
