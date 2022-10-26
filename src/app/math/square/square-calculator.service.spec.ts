import { TestBed } from '@angular/core/testing';

import { SquareCalculatorService } from './square-calculator.service';

describe('SquareCalculatorService', () => {
  let service: SquareCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SquareCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
