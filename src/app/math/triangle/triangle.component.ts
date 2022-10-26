import { Component, OnInit } from '@angular/core';
import { Triangle } from '../../figure';
import { TriangleCalculatorService } from './triangle-calculator.service';

@Component({
  selector: 'app-triangle',
  templateUrl: './triangle.component.html',
  styleUrls: ['./triangle.component.scss']
})
export class TriangleComponent implements OnInit {

  triangle: Triangle = {
    title: "Треугольник",
    area: 0,
    perimeter: 0,
    a_side: 0,
    b_side: 0,
    c_side: 0
  }

  constructor(public triangleCalculatorservice: TriangleCalculatorService) { }

  ngOnInit(): void {
  }
  getArea() {
    this.triangle.area = this.triangleCalculatorservice.calculateArea(this.triangle);
  }
  getPerimeter() {
    this.triangle.perimeter = this.triangleCalculatorservice.calculatePerimeter(this.triangle);
  }
}
