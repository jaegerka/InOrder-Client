import { TestBed } from '@angular/core/testing';

import { ToolsserviceService } from './toolsservice.service';

describe('ToolsserviceService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ToolsserviceService = TestBed.get(ToolsserviceService);
    expect(service).toBeTruthy();
  });
});
