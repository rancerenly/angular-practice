import { Component, OnInit } from '@angular/core';
import { Square } from '../figure';
import { SimpleCalculatorService } from '../simple-calculator.service';

@Component({
  selector: 'app-math',
  templateUrl: './math.component.html',
  styleUrls: ['./math.component.scss']
})
export class MathComponent implements OnInit {

  square: Square = {
    title: "Квадрат",
    area: 0,
    perimeter: 0,
    a_side: 0,
    b_side: 0
  }

  constructor(public simpleCalculatorService: SimpleCalculatorService) { }

  getArea() {
    this.square.area = this.simpleCalculatorService.calculateArea(this.square);
  }
  getPerimeter() {
    this.square.perimeter = this.simpleCalculatorService.calculatePerimeter(this.square);
  }
  ngOnInit(): void {
  }

}
