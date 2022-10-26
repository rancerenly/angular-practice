import { Injectable } from '@angular/core';
import { Calculator } from 'src/app/calculator';
import { Triangle } from 'src/app/figure';

@Injectable({
  providedIn: 'root'
})
export class TriangleCalculatorService implements Calculator{

  constructor() { }

  calculateArea(triangle: Triangle): number {
    const p = this.calculatePerimeter(triangle);
    return Math.sqrt(p * (p - triangle.a_side) * (p - triangle.b_side) * (p - triangle.c_side));
  }
  calculatePerimeter(triangle: Triangle): number {
    return triangle.a_side + triangle.b_side + triangle.c_side;
  }
}
