import { TestBed } from '@angular/core/testing';

import { RuntimeStorageService } from './runtime-storage.service';

describe('RuntimeStorageService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RuntimeStorageService = TestBed.get(RuntimeStorageService);
    expect(service).toBeTruthy();
  });
});
