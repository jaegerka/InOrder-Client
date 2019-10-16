import { TestBed } from '@angular/core/testing';

import { InorderuserserviceService } from './inorderuserservice.service';

describe('InorderuserserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: InorderuserserviceService = TestBed.get(InorderuserserviceService);
    expect(service).toBeTruthy();
  });
});
