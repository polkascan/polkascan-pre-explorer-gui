import { TestBed } from '@angular/core/testing';

import { TreasuryProposalService } from './treasury-proposal.service';

describe('TreasuryProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TreasuryProposalService = TestBed.get(TreasuryProposalService);
    expect(service).toBeTruthy();
  });
});
