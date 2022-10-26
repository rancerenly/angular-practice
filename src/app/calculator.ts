import { Figure } from './figure';

export interface Calculator {
  calculateArea(figure: Figure): number;
  calculatePerimeter(figure: Figure): number;
}
