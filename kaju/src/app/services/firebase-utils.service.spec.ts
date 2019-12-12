import { TestBed } from '@angular/core/testing';

import { FirebaseUtilsService } from './firebase-utils.service';

describe('FirebaseUtilsService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FirebaseUtilsService = TestBed.get(FirebaseUtilsService);
    expect(service).toBeTruthy();
  });
});
