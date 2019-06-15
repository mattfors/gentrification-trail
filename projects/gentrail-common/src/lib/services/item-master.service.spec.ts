import { TestBed } from '@angular/core/testing';

import { ItemMasterService } from './item-master.service';

describe('ItemMasterService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ItemMasterService = TestBed.get(ItemMasterService);
    expect(service).toBeTruthy();
  });
});
