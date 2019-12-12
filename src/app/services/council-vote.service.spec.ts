import { TestBed } from '@angular/core/testing';

import { CouncilVoteService } from './council-vote.service';

describe('CouncilVoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouncilVoteService = TestBed.get(CouncilVoteService);
    expect(service).toBeTruthy();
  });
});
