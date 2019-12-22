import { TestBed } from '@angular/core/testing';

import { TechCommProposalService } from './tech-comm-proposal.service';

describe('TechCommProposalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TechCommProposalService = TestBed.get(TechCommProposalService);
    expect(service).toBeTruthy();
  });
});
