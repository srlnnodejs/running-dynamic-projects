import { TestBed } from '@angular/core/testing';

import { PayeurService } from './payeur.service';

describe('PayeurService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: PayeurService = TestBed.get(PayeurService);
    expect(service).toBeTruthy();
  });
});
