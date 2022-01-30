import { TestBed } from '@angular/core/testing';

import { TutionmanagementService } from './tutionmanagement.service';

describe('TutionmanagementService', () => {
  let service: TutionmanagementService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TutionmanagementService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
