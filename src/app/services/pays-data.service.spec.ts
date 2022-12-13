import { TestBed } from '@angular/core/testing';

import { PaysDataService } from './pays-data.service';

describe('PaysDataService', () => {
  let service: PaysDataService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PaysDataService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
