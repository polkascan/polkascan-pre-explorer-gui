import { TestBed } from '@angular/core/testing';

import { DemocracyVoteService } from './democracy-vote.service';

describe('DemocracyVoteService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemocracyVoteService = TestBed.get(DemocracyVoteService);
    expect(service).toBeTruthy();
  });
});
