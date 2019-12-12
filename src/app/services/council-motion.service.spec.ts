import { TestBed } from '@angular/core/testing';

import { CouncilMotionService } from './council-motion.service';

describe('CouncilMotionService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: CouncilMotionService = TestBed.get(CouncilMotionService);
    expect(service).toBeTruthy();
  });
});
