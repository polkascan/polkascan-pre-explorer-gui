import { TestBed } from '@angular/core/testing';

import { AccountIndexService } from './account-index.service';

describe('AccountIndexService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AccountIndexService = TestBed.get(AccountIndexService);
    expect(service).toBeTruthy();
  });
});
