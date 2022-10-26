import { TestBed } from '@angular/core/testing';

import { CircleCalculatorService } from './circle-calculator.service';

describe('CircleCalculatorService', () => {
  let service: CircleCalculatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CircleCalculatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
