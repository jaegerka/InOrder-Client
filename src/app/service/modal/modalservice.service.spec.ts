import { TestBed } from '@angular/core/testing';

import { ModalServiceService } from './../modal/modalservice.service';

describe('ModalserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ModalServiceService = TestBed.get(ModalServiceService);
    expect(service).toBeTruthy();
  });
});
