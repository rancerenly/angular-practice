import { CircleCalculatorService } from './circle-calculator.service';
import { Component, OnInit } from '@angular/core';
import { Circle } from 'src/app/figure';

@Component({
  selector: 'app-circle',
  templateUrl: './circle.component.html',
  styleUrls: ['./circle.component.scss']
})
export class CircleComponent implements OnInit {

  circle: Circle = {
    title: "Круг",
    area: 0,
    perimeter: 0,
    raduis: 0
  }

  constructor(public circleCalculatorservice: CircleCalculatorService) { }

  ngOnInit(): void {
  }

  getArea() {
    this.circle.area = this.circleCalculatorservice.calculateArea(this.circle);
  }
  getPerimeter() {
    this.circle.perimeter = this.circleCalculatorservice.calculatePerimeter(this.circle);
  }

}
