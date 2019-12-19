import { TestBed } from '@angular/core/testing';

import { PraticienService } from './praticien.service';

describe('PraticienService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PraticienService = TestBed.get(PraticienService);
    expect(service).toBeTruthy();
  });
});
