import { TestBed } from '@angular/core/testing';

import { GentrailCommonService } from './gentrail-common.service';

describe('GentrailCommonService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GentrailCommonService = TestBed.get(GentrailCommonService);
    expect(service).toBeTruthy();
  });
});
