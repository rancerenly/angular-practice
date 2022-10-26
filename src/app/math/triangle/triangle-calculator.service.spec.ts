import { TestBed } from '@angular/core/testing';

import { TriangleCalculatorService } from './triangle-calculator.service';

describe('TriangleCalculatorService', () => {
  let service: TriangleCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TriangleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
