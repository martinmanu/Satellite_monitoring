import { TestBed } from '@angular/core/testing';

import { ApiCenterService } from './api-center.service';

describe('ApiCenterService', () => {
  let service: ApiCenterService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiCenterService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
