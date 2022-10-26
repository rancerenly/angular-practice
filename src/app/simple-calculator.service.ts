import { Injectable } from '@angular/core';
import { Figure, Square } from './figure';

@Injectable({
  providedIn: 'root'
})
export class SimpleCalculatorService {

  constructor() { }

  calculateArea(figure: Figure) {
    // return square.a_side * square.b_side;
  }
  calculatePerimeter(figure: Figure){
    // return (square.a_side + square.b_side) * 2;
  }
}
