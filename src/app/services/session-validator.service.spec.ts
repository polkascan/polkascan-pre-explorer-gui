import { TestBed } from '@angular/core/testing';

import { SessionValidatorService } from './session-validator.service';

describe('SessionValidatorService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: SessionValidatorService = TestBed.get(SessionValidatorService);
    expect(service).toBeTruthy();
  });
});
