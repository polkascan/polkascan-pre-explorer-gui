import { TestBed } from '@angular/core/testing';

import { RuntimeTypeService } from './runtime-type.service';

describe('RuntimeTypeService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuntimeTypeService = TestBed.get(RuntimeTypeService);
    expect(service).toBeTruthy();
  });
});
