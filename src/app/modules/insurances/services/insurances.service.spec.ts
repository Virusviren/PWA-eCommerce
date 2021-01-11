import { TestBed } from '@angular/core/testing';

import { InsurancesService } from './insurances.service';

describe('InsurancesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InsurancesService = TestBed.get(InsurancesService);
    expect(service).toBeTruthy();
  });
});
