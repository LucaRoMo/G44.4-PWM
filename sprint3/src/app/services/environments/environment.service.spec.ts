import { TestBed } from '@angular/core/testing';

import { Environment } from './environment';

describe('EnvironmentService', () => {
  let service: Environment;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Environment);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
