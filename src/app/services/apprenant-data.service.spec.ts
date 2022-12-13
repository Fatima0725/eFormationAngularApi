import { TestBed } from '@angular/core/testing';

import { ApprenantDataService } from './apprenant-data.service';

describe('ApprenantDataService', () => {
  let service: ApprenantDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApprenantDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
