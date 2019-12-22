import { TestBed } from '@angular/core/testing';

import { TechCommProposalVoteService } from './tech-comm-proposal-vote.service';

describe('TechCommProposalVoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechCommProposalVoteService = TestBed.get(TechCommProposalVoteService);
    expect(service).toBeTruthy();
  });
});
