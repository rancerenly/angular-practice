import { Calculator } from 'src/app/calculator';
import { Injectable } from '@angular/core';
import { Square } from 'src/app/figure';


@Injectable({
  providedIn: 'root'
})

export class SquareCalculatorService implements Calculator{

  constructor() { }

  calculateArea(square: Square): number {
    return square.a_side * square.b_side;
  }
  calculatePerimeter(square: Square): number {
    return (square.a_side + square.b_side) * 2;
  }
}
