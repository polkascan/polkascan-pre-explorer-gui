import { TestBed } from '@angular/core/testing';

import { BalanceTransferService } from './balance-transfer.service';

describe('BalanceTransferService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BalanceTransferService = TestBed.get(BalanceTransferService);
    expect(service).toBeTruthy();
  });
});
