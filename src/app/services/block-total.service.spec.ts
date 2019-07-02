import { TestBed } from '@angular/core/testing';

import { BlockTotalService } from './block-total.service';

describe('BlockTotalService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BlockTotalService = TestBed.get(BlockTotalService);
    expect(service).toBeTruthy();
  });
});
