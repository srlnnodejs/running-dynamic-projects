import { TestBed } from '@angular/core/testing';

import { RemboursementService } from './remboursement.service';

describe('RemboursementService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemboursementService = TestBed.get(RemboursementService);
    expect(service).toBeTruthy();
  });
});
