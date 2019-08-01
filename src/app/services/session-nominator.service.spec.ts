import { TestBed } from '@angular/core/testing';

import { SessionNominatorService } from './session-nominator.service';

describe('SessionNominatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionNominatorService = TestBed.get(SessionNominatorService);
    expect(service).toBeTruthy();
  });
});
