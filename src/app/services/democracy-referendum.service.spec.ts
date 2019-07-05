import { TestBed } from '@angular/core/testing';

import { DemocracyReferendumService } from './democracy-referendum.service';

describe('DemocracyReferendumService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DemocracyReferendumService = TestBed.get(DemocracyReferendumService);
    expect(service).toBeTruthy();
  });
});
