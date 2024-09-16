import { TestBed } from '@angular/core/testing';

import { NgValidationService } from './ng-validation.service';

describe('NgValidationService', () => {
  let service: NgValidationService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgValidationService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
