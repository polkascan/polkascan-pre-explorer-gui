import { TestBed } from '@angular/core/testing';

import { RuntimeConstantService } from './runtime-constant.service';

describe('RuntimeConstantService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuntimeConstantService = TestBed.get(RuntimeConstantService);
    expect(service).toBeTruthy();
  });
});
