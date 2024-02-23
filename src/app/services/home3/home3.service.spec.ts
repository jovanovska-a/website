import { TestBed } from '@angular/core/testing';

import { Home3Service } from './home3.service';

describe('Home3Service', () => {
  let service: Home3Service;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Home3Service);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
