import { Injectable } from '@angular/core';
import { Calculator } from 'src/app/calculator';
import { Circle, Figure } from 'src/app/figure';

@Injectable({
  providedIn: 'root'
})
export class CircleCalculatorService implements Calculator {

  constructor() { }
  calculateArea(circle: Circle): number {
    return Math.PI * circle.raduis ** 2;
  }
  calculatePerimeter(circle: Circle): number {
    return 2 * Math.PI * circle.raduis;
  }
}
