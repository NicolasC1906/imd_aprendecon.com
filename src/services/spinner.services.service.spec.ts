import { TestBed } from '@angular/core/testing';

import { SpinnerServicesService } from './spinner.services.service';

describe('SpinnerServicesService', () => {
  let service: SpinnerServicesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SpinnerServicesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
