import { TestBed } from '@angular/core/testing';

import { Home2Service } from './home2.service';

describe('Hom2Service', () => {
  let service: Home2Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home2Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
