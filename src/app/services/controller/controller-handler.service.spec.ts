import { TestBed } from '@angular/core/testing';

import { ControllerHandlerService } from './controller-handler.service';

describe('ControllerHandlerService', () => {
  let service: ControllerHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ControllerHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
