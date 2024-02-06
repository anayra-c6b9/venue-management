import { TestBed } from '@angular/core/testing';

import { NavigationHandlerService } from './navigation-handler.service';

describe('NavigationHandlerService', () => {
  let service: NavigationHandlerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NavigationHandlerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
