import { TestBed } from '@angular/core/testing';

import { DemocracyProposalService } from './democracy-proposal.service';

describe('DemocracyProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemocracyProposalService = TestBed.get(DemocracyProposalService);
    expect(service).toBeTruthy();
  });
});
