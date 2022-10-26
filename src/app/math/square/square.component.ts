import { Component, OnInit } from '@angular/core';
import { Square } from 'src/app/figure';
import { SquareCalculatorService } from './square-calculator.service';

@Component({
  selector: 'app-square',
  templateUrl: './square.component.html',
  styleUrls: ['./square.component.scss']
})
export class SquareComponent implements OnInit {

  square: Square = {
    title: "Квадрат",
    area: 0,
    perimeter: 0,
    a_side: 0,
    b_side: 0
  }

  constructor(public squareCalculatorservice: SquareCalculatorService) { }

  getArea() {
    this.square.area = this.squareCalculatorservice.calculateArea(this.square);
  }
  getPerimeter() {
    this.square.perimeter = this.squareCalculatorservice.calculatePerimeter(this.square);
  }
  ngOnInit(): void {
  }

}
