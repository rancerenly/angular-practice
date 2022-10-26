import { Injectable } from '@angular/core';
import { Figure, Square } from './figure';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService {

  constructor() { }

  calculateArea(square: Square) {
    return square.a_side * square.b_side;
  }
  calculatePerimeter(square: Square){ 
    return (square.a_side + square.b_side) * 2;
  }
}
